package kw.ic.backend.menu.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;
import java.util.stream.IntStream;
import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.menu.dto.request.MenuPageRequest;
import kw.ic.backend.domain.menu.dto.request.MenuRequest;
import kw.ic.backend.domain.menu.repository.MenuRepository;
import kw.ic.backend.domain.restaurant.dto.embbed.Address;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.dto.embbed.RunningTime;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import kw.ic.backend.domain.restaurant.repository.RestaurantRepository;
import kw.ic.backend.global.config.JpaConfig;
import kw.ic.backend.global.config.QueryDSLConfig;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.Page;
import org.springframework.test.context.ActiveProfiles;

@DataJpaTest
@ActiveProfiles("test")
@Import({JpaConfig.class,QueryDSLConfig.class})
@TestInstance(Lifecycle.PER_CLASS)
public class MenuRepositoryDSLTest {

    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;

    @BeforeAll
    private void init() {
        Restaurant restaurant = Restaurant.builder()
                .name("name")
                .description("description")
                .type(RestaurantType.KOREAN)
                .address(new Address("city1", "street1", "zipcode"))
                .runningTime(new RunningTime(LocalDateTime.now(), LocalDateTime.now()))
                .build();
        restaurantRepository.save(restaurant);

        IntStream.rangeClosed(1,17)
                .forEach(idx ->{
                    MenuRequest request = new MenuRequest(
                            "menuName"+idx,
                            idx,
                            "description"+idx,
                            1L
                    );

                    Menu menu = menuRepository.save(request.toMenu());
                    System.out.println(menu.getMenuName());
                });
    }

    @Test
    public void findMenusWithPaginationTest() throws Exception{
        //given
        MenuPageRequest request = MenuPageRequest.builder().restaurantId(1L).price(10).build();

        //when
        Page<Menu> result = menuRepository.findMenusWithPagination(request);

        //then

        assertThat(result.getTotalElements()).isEqualTo(10);
    }
}
