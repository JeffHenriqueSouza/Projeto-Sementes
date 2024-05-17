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
exports.AvaliacaoController = void 0;
const common_1 = require("@nestjs/common");
const avaliacao_service_1 = require("./avaliacao.service");
const criar_avaliacao_dto_1 = require("./dto/criar-avaliacao.dto");
let AvaliacaoController = class AvaliacaoController {
    constructor(avaliacaoService) {
        this.avaliacaoService = avaliacaoService;
    }
    async criarAvaliacao(criarAvaliacaoDto) {
        return this.avaliacaoService.criarAvaliacao(criarAvaliacaoDto);
    }
    async listarAvaliacoes() {
        return this.avaliacaoService.listarAvaliacoes();
    }
    async buscarAvaliacaoPorId(id) {
        return this.avaliacaoService.buscarAvaliacaoPorId(id);
    }
    async atualizarAvaliacao(id, criarAvaliacaoDto) {
        return this.avaliacaoService.atualizarAvaliacao(id, criarAvaliacaoDto);
    }
    async removerAvaliacao(id) {
        return this.avaliacaoService.removerAvaliacao(id);
    }
};
exports.AvaliacaoController = AvaliacaoController;
__decorate([
    (0, common_1.Post)('/criar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_avaliacao_dto_1.CriarAvaliacaoDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "criarAvaliacao", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "listarAvaliacoes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "buscarAvaliacaoPorId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, criar_avaliacao_dto_1.CriarAvaliacaoDto]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "atualizarAvaliacao", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AvaliacaoController.prototype, "removerAvaliacao", null);
exports.AvaliacaoController = AvaliacaoController = __decorate([
    (0, common_1.Controller)('avaliacoes'),
    __metadata("design:paramtypes", [avaliacao_service_1.AvaliacaoService])
], AvaliacaoController);
//# sourceMappingURL=avaliacao.controller.js.map