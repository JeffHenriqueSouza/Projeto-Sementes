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
const usuario_entity_1 = require("./entity/usuario.entity");
const usuario_repository_1 = require("./usuario.repository");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async register(registerDTO) {
        const newUser = new usuario_entity_1.UsuarioEntity();
        newUser.nome = registerDTO.nome;
        newUser.email = registerDTO.email;
        newUser.senha = registerDTO.senha;
        newUser.cargo = registerDTO.cargo;
        return this.usuarioRepository.save(newUser);
    }
    async validateUser(email, password) {
        return null;
    }
    async findOneByEmail(email) {
        return undefined;
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map