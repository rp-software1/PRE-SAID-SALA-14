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
exports.PlatosController = void 0;
const common_1 = require("@nestjs/common");
const platos_service_1 = require("./platos.service");
const crear_plato_dto_1 = require("./dto/crear-plato.dto");
const actualizar_plato_dto_1 = require("./dto/actualizar-plato.dto");
let PlatosController = class PlatosController {
    platosService;
    constructor(platosService) {
        this.platosService = platosService;
    }
    crear(crearPlatoDto) {
        return this.platosService.crear(crearPlatoDto);
    }
    encontrarTodos() {
        return this.platosService.encontrarTodos();
    }
    encontrarUno(id) {
        return this.platosService.encontrarUno(id);
    }
    actualizar(id, actualizarPlatoDto) {
        return this.platosService.actualizar(id, actualizarPlatoDto);
    }
    eliminar(id) {
        return this.platosService.eliminar(id);
    }
};
exports.PlatosController = PlatosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_plato_dto_1.CrearPlatoDto]),
    __metadata("design:returntype", void 0)
], PlatosController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlatosController.prototype, "encontrarTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlatosController.prototype, "encontrarUno", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_plato_dto_1.ActualizarPlatoDto]),
    __metadata("design:returntype", void 0)
], PlatosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlatosController.prototype, "eliminar", null);
exports.PlatosController = PlatosController = __decorate([
    (0, common_1.Controller)('platos'),
    __metadata("design:paramtypes", [platos_service_1.PlatosService])
], PlatosController);
//# sourceMappingURL=platos.controller.js.map