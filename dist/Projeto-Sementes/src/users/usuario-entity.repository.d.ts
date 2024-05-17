import { Repository, EntityManager } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
export declare class UsuarioEntityRepository extends Repository<UsuarioEntity> {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
}
