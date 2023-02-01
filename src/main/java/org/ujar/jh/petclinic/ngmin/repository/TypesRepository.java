package org.ujar.jh.petclinic.ngmin.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import org.ujar.jh.petclinic.ngmin.domain.Types;

/**
 * Spring Data JPA repository for the Types entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TypesRepository extends JpaRepository<Types, Long> {}
