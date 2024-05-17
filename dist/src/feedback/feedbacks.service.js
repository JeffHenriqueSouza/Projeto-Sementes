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
exports.FeedbacksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const feedback_entity_1 = require("./feedback.entity");
const avaliacao_entity_1 = require("../avaliacao/avaliacao.entity");
let FeedbacksService = class FeedbacksService {
    constructor(feedbackRepository, avaliacaoRepository) {
        this.feedbackRepository = feedbackRepository;
        this.avaliacaoRepository = avaliacaoRepository;
    }
    async create(createFeedbackDto) {
        const { userId, message } = createFeedbackDto;
        const feedback = this.feedbackRepository.create({ userId, message });
        return await this.feedbackRepository.save(feedback);
    }
    async findAll() {
        return await this.feedbackRepository.find();
    }
    async getFeedbackForUser(userId) {
        const avaliacoes = await this.avaliacaoRepository.find({ where: { usuarioAvaliadoId: userId } });
        if (avaliacoes.length === 0) {
            return "Não há avaliações disponíveis para este usuário.";
        }
        const media = this.calculateAverage(avaliacoes);
        const feedback = this.generateFeedback(media);
        return feedback;
    }
    calculateAverage(avaliacoes) {
        const soma = {
            comunicacao: 0,
            proatividade: 0,
            inteligenciaEmocional: 0,
            flexibilidade: 0,
            criatividade: 0,
            observacao: 0,
        };
        for (const avaliacao of avaliacoes) {
            soma.comunicacao += avaliacao.comunicacao;
            soma.proatividade += avaliacao.proatividade;
            soma.inteligenciaEmocional += avaliacao.inteligenciaEmocional;
            soma.flexibilidade += avaliacao.flexibilidade;
            soma.criatividade += avaliacao.criatividade;
            soma.observacao += avaliacao.observacao;
        }
        const totalAvaliacoes = avaliacoes.length;
        const media = {
            comunicacao: totalAvaliacoes > 0 ? soma.comunicacao / totalAvaliacoes : 0,
            proatividade: totalAvaliacoes > 0 ? soma.proatividade / totalAvaliacoes : 0,
            inteligenciaEmocional: totalAvaliacoes > 0 ? soma.inteligenciaEmocional / totalAvaliacoes : 0,
            flexibilidade: totalAvaliacoes > 0 ? soma.flexibilidade / totalAvaliacoes : 0,
            criatividade: totalAvaliacoes > 0 ? soma.criatividade / totalAvaliacoes : 0,
            observacao: totalAvaliacoes > 0 ? soma.observacao / totalAvaliacoes : 0,
        };
        return media;
    }
    generateFeedback(media) {
        const mediaGeral = (media.comunicacao + media.proatividade + media.inteligenciaEmocional + media.flexibilidade + media.criatividade + media.observacao) / 6;
        if (mediaGeral >= 3.5) {
            return "Parabéns pelo excelente desempenho em todas as habilidades! Continue mantendo o alto padrão de qualidade e inspire outros a fazer o mesmo.";
        }
        else if (mediaGeral >= 2.5) {
            return "Seu desempenho é sólido em todas as habilidades, mas ainda há espaço para aprimoramento. Identifique áreas específicas que podem ser aprimoradas e trabalhe nelas com dedicação.";
        }
        else if (mediaGeral >= 1.5) {
            return "Você está mostrando progresso em suas habilidades, porém ainda há espaço para melhorias substanciais. Dedique-se a praticar consistentemente para fortalecer suas habilidades.";
        }
        else {
            return "Seu desempenho ainda é insatisfatório em algumas áreas. Recomendamos focar em melhorar suas habilidades em todas as áreas.";
        }
    }
};
exports.FeedbacksService = FeedbacksService;
exports.FeedbacksService = FeedbacksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(feedback_entity_1.Feedback)),
    __param(1, (0, typeorm_1.InjectRepository)(avaliacao_entity_1.AvaliacaoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FeedbacksService);
//# sourceMappingURL=feedbacks.service.js.map