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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const usuario_entity_1 = require("./entity/usuario.entity");
const usuario_repository_1 = require("./usuario.repository");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository, jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }
    async salvar(usuario) {
        return await this.usuarioRepository.salvar(usuario);
    }
    async listar() {
        return await this.usuarioRepository.listar();
    }
    async atualiza(id, dadosDeAtualizacao) {
        if (!id) {
            console.error("ID está vazio ou nulo");
            throw new Error('ID está vazio ou nulo');
        }
        return await this.usuarioRepository.atualiza(id, dadosDeAtualizacao);
    }
    async remove(id) {
        if (!id) {
            console.error("ID está vazio ou nulo");
            throw new Error('ID está vazio ou nulo');
        }
        return await this.usuarioRepository.remove(id);
    }
    async buscarPorNomeECargo(nome, cargo) {
        return await this.usuarioRepository.buscarPorNomeECargo(nome, cargo);
    }
    async findOneByUsername(username) {
        return await this.usuarioRepository.findOneByUsername(username);
    }
    async findOneByEmail(email) {
        return await this.usuarioRepository.findOneByEmail(email);
    }
    async register(registerDTO) {
        const hashedPassword = await bcrypt.hash(registerDTO.senha, 10);
        const newUser = new usuario_entity_1.UsuarioEntity();
        newUser.nome = registerDTO.nome;
        newUser.email = registerDTO.email;
        newUser.senha = hashedPassword;
        newUser.cargo = registerDTO.cargo;
        return await this.usuarioRepository.salvar(newUser);
    }
    async validateUser(username, pass) {
        const user = await this.findOneByUsername(username);
        if (user && await bcrypt.compare(pass, user.senha)) {
            const { senha, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.nome, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository,
        jwt_1.JwtService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map