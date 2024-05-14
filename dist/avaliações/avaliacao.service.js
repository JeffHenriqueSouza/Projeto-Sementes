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
exports.AvaliacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const avaliacao_entity_1 = require("./avaliacao.entity");
let AvaliacaoService = class AvaliacaoService {
    constructor(avaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }
    async criarAvaliacao(avaliacaoDto) {
        const novaAvaliacao = this.avaliacaoRepository.create(avaliacaoDto);
        return await this.avaliacaoRepository.save(novaAvaliacao);
    }
    async listarAvaliacoes() {
        return await this.avaliacaoRepository.find();
    }
    async buscarAvaliacaoPorId(id) {
        const avaliacao = await this.avaliacaoRepository.findOne({ where: { id } });
        if (!avaliacao) {
            throw new common_1.NotFoundException('Avaliação não encontrada.');
        }
        return avaliacao;
    }
    async atualizarAvaliacao(id, atualizarAvaliacaoDto) {
        const avaliacao = await this.buscarAvaliacaoPorId(id);
        this.avaliacaoRepository.merge(avaliacao, atualizarAvaliacaoDto);
        return await this.avaliacaoRepository.save(avaliacao);
    }
    async removerAvaliacao(id) {
        const resultado = await this.avaliacaoRepository.delete(id);
        if (resultado.affected === 0) {
            throw new common_1.NotFoundException('Avaliação não encontrada.');
        }
    }
};
exports.AvaliacaoService = AvaliacaoService;
exports.AvaliacaoService = AvaliacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(avaliacao_entity_1.AvaliacaoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AvaliacaoService);
//# sourceMappingURL=avaliacao.service.js.map