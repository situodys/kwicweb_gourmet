package kw.ic.backend.domain.menu.repository;

import kw.ic.backend.domain.menu.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu,Long> {
}
