package kw.ic.backend.menu.repository;


import static org.assertj.core.api.Assertions.*;

import java.util.Optional;
import java.util.stream.IntStream;
import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.menu.dto.request.MenuRequest;
import kw.ic.backend.domain.menu.repository.MenuRepository;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import kw.ic.backend.domain.restaurant.repository.RestaurantRepository;
import kw.ic.backend.global.config.JpaConfig;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@DataJpaTest
@ActiveProfiles("test")
@Import(JpaConfig.class)
@TestInstance(Lifecycle.PER_CLASS)
public class MenuRepositoryTest {

    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;

    @BeforeAll
    private void init() {
        Restaurant restaurant = Restaurant.builder()
                .type(RestaurantType.KOREAN)
                .build();
        restaurantRepository.save(restaurant);

        IntStream.rangeClosed(1,5)
                .forEach(idx ->{
                    MenuRequest request = new MenuRequest(
                            "menuName"+idx,
                            idx,
                            "description"+idx,
                            1L
                    );

                    menuRepository.save(request.toMenu());
                });
    }

    @Test
    @DisplayName("메뉴 정상 삭제 확인")
    public void delete() throws Exception{
        //given
        Long targetMenuId = 2L;
        //when
        menuRepository.deleteById(targetMenuId);
        Optional<Menu> targetMenu = menuRepository.findById(targetMenuId);
        //then
        assertThat(targetMenu.isPresent()).isEqualTo(false);
    }
}
