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
exports.IsEmailUnico = exports.EmailUnicoConstraint = void 0;
const class_validator_1 = require("class-validator");
const usuario_repository_1 = require("../usuario.repository");
let EmailUnicoConstraint = class EmailUnicoConstraint {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async validate(email) {
        const usuario = await this.usuarioRepository.findOneByEmail(email);
        return !usuario;
    }
};
exports.EmailUnicoConstraint = EmailUnicoConstraint;
exports.EmailUnicoConstraint = EmailUnicoConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository])
], EmailUnicoConstraint);
function IsEmailUnico(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: EmailUnicoConstraint,
        });
    };
}
exports.IsEmailUnico = IsEmailUnico;
//# sourceMappingURL=email-eh-unico.decorator.js.map