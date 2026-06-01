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
exports.PlatosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const plato_entity_1 = require("./entities/plato.entity");
let PlatosService = class PlatosService {
    platoRepository;
    constructor(platoRepository) {
        this.platoRepository = platoRepository;
    }
    async crear(crearPlatoDto) {
        const plato = this.platoRepository.create(crearPlatoDto);
        return this.platoRepository.save(plato);
    }
    async encontrarTodos() {
        return this.platoRepository.find({
            order: { nombre: 'ASC' },
        });
    }
    async encontrarUno(id) {
        const plato = await this.platoRepository.findOne({ where: { id } });
        if (!plato) {
            throw new common_1.NotFoundException(`Plato con id ${id} no encontrado`);
        }
        return plato;
    }
    async actualizar(id, actualizarPlatoDto) {
        const plato = await this.encontrarUno(id);
        Object.assign(plato, actualizarPlatoDto);
        return this.platoRepository.save(plato);
    }
    async eliminar(id) {
        const plato = await this.encontrarUno(id);
        await this.platoRepository.remove(plato);
    }
};
exports.PlatosService = PlatosService;
exports.PlatosService = PlatosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plato_entity_1.Plato)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlatosService);
//# sourceMappingURL=platos.service.js.map