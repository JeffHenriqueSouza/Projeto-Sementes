import { EntityRepository, Repository, EntityManager } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { InjectEntityManager } from '@nestjs/typeorm';

@EntityRepository(UsuarioEntity)
export class UsuarioEntityRepository extends Repository<UsuarioEntity> {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {
    super(UsuarioEntity, entityManager);
  }
}
