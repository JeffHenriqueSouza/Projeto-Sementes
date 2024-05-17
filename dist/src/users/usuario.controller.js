"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const usuario_entity_1 = require("./entity/usuario.entity");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async criaUsuario(dadosDoUsuario) {
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = (0, uuid_1.v4)();
        usuarioEntity.cargo = dadosDoUsuario.cargo;
        await this.usuarioService.salvar(usuarioEntity);
        return {
            usuario: new ListaUsuario_dto_1.ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'usuário criado com sucesso',
        };
    }
    async listUsuarios() {
        return await this.usuarioService.listar();
    }
    async atualizaUsuario(id, novosDados) {
        const usuarioAtualizado = await this.usuarioService.atualiza(id, novosDados);
        return {
            usuario: usuarioAtualizado,
            mensagem: 'usuário atualizado com sucesso',
        };
    }
    async removeUsuario(id) {
        const usuarioRemovido = await this.usuarioService.remove(id);
        return {
            usuario: usuarioRemovido,
            mensagem: 'usuário removido com sucesso',
        };
    }
    async buscarUsuarios(nome, cargo) {
        return await this.usuarioService.buscarPorNomeECargo(nome, cargo);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CriaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "criaUsuario", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "listUsuarios", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.AtualizaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualizaUsuario", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "removeUsuario", null);
__decorate([
    (0, common_1.Get)('/buscar'),
    __param(0, (0, common_1.Query)('nome')),
    __param(1, (0, common_1.Query)('cargo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "buscarUsuarios", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map