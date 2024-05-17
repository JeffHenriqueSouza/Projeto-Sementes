"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feedback_entity_1 = require("./feedback.entity");
const feedback_controller_1 = require("./feedback.controller");
const feedbacks_service_1 = require("./feedbacks.service");
const avaliacao_module_1 = require("../avalia\u00E7\u00F5es/avaliacao.module");
const avaliacao_entity_1 = require("../avalia\u00E7\u00F5es/avaliacao.entity");
const avaliacao_repository_1 = require("../avalia\u00E7\u00F5es/avaliacao.repository");
let FeedbackModule = class FeedbackModule {
};
exports.FeedbackModule = FeedbackModule;
exports.FeedbackModule = FeedbackModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([feedback_entity_1.Feedback, avaliacao_entity_1.AvaliacaoEntity]),
            avaliacao_module_1.AvaliacaoModule
        ],
        controllers: [feedback_controller_1.FeedbackController],
        providers: [feedbacks_service_1.FeedbacksService, avaliacao_repository_1.AvaliacaoEntityRepository],
        exports: [feedbacks_service_1.FeedbacksService],
    })
], FeedbackModule);
//# sourceMappingURL=feedback.module.js.map