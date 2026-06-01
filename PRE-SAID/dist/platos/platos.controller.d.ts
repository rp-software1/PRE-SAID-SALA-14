import { PlatosService } from './platos.service';
import { CrearPlatoDto } from './dto/crear-plato.dto';
import { ActualizarPlatoDto } from './dto/actualizar-plato.dto';
export declare class PlatosController {
    private readonly platosService;
    constructor(platosService: PlatosService);
    crear(crearPlatoDto: CrearPlatoDto): Promise<import("./entities/plato.entity").Plato>;
    encontrarTodos(): Promise<import("./entities/plato.entity").Plato[]>;
    encontrarUno(id: number): Promise<import("./entities/plato.entity").Plato>;
    actualizar(id: number, actualizarPlatoDto: ActualizarPlatoDto): Promise<import("./entities/plato.entity").Plato>;
    eliminar(id: number): Promise<void>;
}
