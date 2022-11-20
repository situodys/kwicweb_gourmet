package kw.ic.backend.domain.menu.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/menus")
public class MenuController {

    private final MenuService menuService;

    @GetMapping("/{restaurant_id}")
    ResponseEntity<MenuPageResponse> findMenusByRestaurant(@PathVariable(name = "restaurant_id") Long restaurantId,
                                                           @RequestBody MenuPageRequest request) {
        log.info("find menus of restaurantId: {} with pagination", restaurantId);

        MenuPageResponse response = menuService.findMenus(request);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{restaurant_id}")
    ResponseEntity<Long> register(@PathVariable(name = "restaurant_id") Long restaurantId,
                                  @RequestBody MenuRequest request) {
        log.info("Register menu of restaurant id: {}", restaurantId);

        Long menuId = menuService.register(request);

        return ResponseEntity.ok(menuId);
    }

    @DeleteMapping("/{menu_id}")
    ResponseEntity<Long> delete(@PathVariable(name = "menu_id") Long menuId) {
        log.info("delete menu");

        menuService.delete(menuId);

        return ResponseEntity.ok(menuId);
    }
}
