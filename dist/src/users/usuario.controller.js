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
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const usuario_entity_1 = require("./entity/usuario.entity");
const usuario_service_1 = require("./usuario.service");
const auth_service_1 = require("../auth/auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioService, authService) {
        this.usuarioService = usuarioService;
        this.authService = authService;
    }
    async criaUsuario(dadosDoUsuario) {
        const id = (0, uuid_1.v4)();
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = await bcrypt.hash(dadosDoUsuario.senha, 10);
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = id;
        usuarioEntity.cargo = dadosDoUsuario.cargo;
        const newUser = await this.usuarioService.salvar(usuarioEntity);
        return {
            usuario: new ListaUsuario_dto_1.ListaUsuarioDTO(newUser.id, newUser.nome),
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
    async login(loginDTO) {
        const user = await this.usuarioService.validateUser(loginDTO.username, loginDTO.password);
        if (!user) {
            return {
                message: 'Invalid credentials',
            };
        }
        return this.authService.login(user);
    }
    async register(registerDTO) {
        const existingUser = await this.usuarioService.findOneByEmail(registerDTO.email);
        if (existingUser) {
            return { message: 'E-mail já registrado' };
        }
        const newUser = await this.usuarioService.register(registerDTO);
        return { message: 'Usuário registrado com sucesso', user: newUser };
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
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "register", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        auth_service_1.AuthService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map