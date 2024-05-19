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
const auth_service_1 = require("../auth/auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
const usuario_service_1 = require("./usuario.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsuarioController = class UsuarioController {
    constructor(authService, usuarioService, jwtService) {
        this.authService = authService;
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
    }
    async register(registerDTO) {
        const existingUser = await this.usuarioService.findOneByEmail(registerDTO.email);
        if (existingUser) {
            return { message: 'E-mail já registrado' };
        }
        const hashedPassword = await bcrypt.hash(registerDTO.password, 10);
        registerDTO.password = hashedPassword;
        const newUser = await this.usuarioService.register(registerDTO);
        const token = await this.authService.login(newUser);
        return { message: 'Usuário registrado com sucesso', user: newUser, token };
    }
    async login(loginDTO) {
        const { email, password } = loginDTO;
        const user = await this.usuarioService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Usuário não cadastrado');
        }
        const token = this.jwtService.sign({ userId: user.password });
        return { token };
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('/usuarios'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        usuario_service_1.UsuarioService,
        jwt_1.JwtService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map