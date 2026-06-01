import { Repository } from 'typeorm';
import { Plato } from './entities/plato.entity';
import { CrearPlatoDto } from './dto/crear-plato.dto';
import { ActualizarPlatoDto } from './dto/actualizar-plato.dto';
export declare class PlatosService {
    private readonly platoRepository;
    constructor(platoRepository: Repository<Plato>);
    crear(crearPlatoDto: CrearPlatoDto): Promise<Plato>;
    encontrarTodos(): Promise<Plato[]>;
    encontrarUno(id: number): Promise<Plato>;
    actualizar(id: number, actualizarPlatoDto: ActualizarPlatoDto): Promise<Plato>;
    eliminar(id: number): Promise<void>;
}
