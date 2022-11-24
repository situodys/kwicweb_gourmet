package kw.ic.backend.domain.restaurant.service;

import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import kw.ic.backend.domain.restaurant.dto.RestaurantResponseAssembler;
import kw.ic.backend.domain.restaurant.dto.projection.RestaurantStatic;
import kw.ic.backend.domain.restaurant.dto.request.RestaurantPageRequest;
import kw.ic.backend.domain.restaurant.dto.request.RestaurantRequest;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantPageResponse;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantResponse;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantStaticResponse;
import kw.ic.backend.domain.restaurant.dto.response.SimpleRestaurantResponse;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import kw.ic.backend.domain.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantResponseAssembler responseAssembler;

    public RestaurantPageResponse findRestaurants(RestaurantPageRequest request) {

        List<RestaurantStaticResponse> result = restaurantRepository.findRestaurantsWithPagination(request)
                .stream()
                .map(restaurantStatic -> responseAssembler.restaurantStaticResponse(restaurantStatic))
                .collect(Collectors.toUnmodifiableList());

        return responseAssembler.restaurantPageResponse(result);
    }

    public RestaurantResponse findById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);

        return responseAssembler.restaurantResponse(restaurant);
    }

    public Long register(RestaurantRequest request) {
        Restaurant restaurant = restaurantRepository.save(request.toRestaurant());
        return restaurant.getId();
    }

    public void delete(Long restaurant_id) {
        log.info("delete restaurant_Id: {}", restaurant_id);

        restaurantRepository.deleteById(restaurant_id);
    }
}
