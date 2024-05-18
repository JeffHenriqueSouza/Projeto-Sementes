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
exports.UsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./entity/usuario.entity");
let UsuarioRepository = class UsuarioRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async salvar(usuario) {
        const objeto = this.userRepository.create(usuario);
        return await this.userRepository.save(objeto);
    }
    async listar() {
        return await this.userRepository.find();
    }
    async existeComEmail(email) {
        const possivelUsuario = await this.userRepository.findOne({ where: { email } });
        return !!possivelUsuario;
    }
    async buscaPorId(id) {
        const usuario = await this.userRepository.findOne({ where: { id } });
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        return usuario;
    }
    async atualiza(id, dadosDeAtualizacao) {
        await this.userRepository.update(id, dadosDeAtualizacao);
        return await this.buscaPorId(id);
    }
    async remove(id) {
        const usuarioRemovido = await this.buscaPorId(id);
        await this.userRepository.delete(id);
        return usuarioRemovido;
    }
    async buscarPorNome(nome) {
        return await this.userRepository.find({ where: { nome: (0, typeorm_2.Like)(`%${nome}%`) } });
    }
    async buscarPorCargo(cargo) {
        return await this.userRepository.find({ where: { cargo: (0, typeorm_2.Like)(`%${cargo}%`) } });
    }
    async buscarPorNomeECargo(nome, cargo) {
        return await this.userRepository.find({ where: { nome, cargo } });
    }
    async findOneByUsername(username) {
        const user = await this.userRepository.findOne({ where: { nome: username } });
        return user || undefined;
    }
    async findOneByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user || undefined;
    }
};
exports.UsuarioRepository = UsuarioRepository;
exports.UsuarioRepository = UsuarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioRepository);
//# sourceMappingURL=usuario.repository.js.map