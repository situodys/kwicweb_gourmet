package kw.ic.backend.domain.menu.service;

import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.menu.dto.MenuResponseAssembler;
import kw.ic.backend.domain.menu.dto.request.MenuPageRequest;
import kw.ic.backend.domain.menu.dto.request.MenuRequest;
import kw.ic.backend.domain.menu.dto.response.MenuPageResponse;
import kw.ic.backend.domain.menu.dto.response.MenuResponse;
import kw.ic.backend.domain.menu.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final MenuResponseAssembler responseAssembler;

    public MenuPageResponse findMenus(MenuPageRequest request) {

        Page<MenuResponse> result = menuRepository.findMenusWithPagination(request)
                .map(menu -> responseAssembler.menuResponse(menu));

        return new MenuPageResponse(result);
    }

    public Long register(MenuRequest request) {
        Menu menu = menuRepository.save(request.toMenu());

        return menu.getId();
    }

    public Long delete(Long menuId) {
        menuRepository.deleteById(menuId);

        return menuId;
    }
}
