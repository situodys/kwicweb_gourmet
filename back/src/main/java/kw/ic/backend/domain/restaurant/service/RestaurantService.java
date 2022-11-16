package kw.ic.backend.domain.restaurant.service;

import kw.ic.backend.domain.restaurant.dto.request.RestaurantPageRequest;
import kw.ic.backend.domain.restaurant.dto.request.RestaurantRequest;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantPageResponse;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantResponse;

public interface RestaurantService {

    RestaurantPageResponse findRestaurants(RestaurantPageRequest request);

    RestaurantResponse findById(Long id);

    Long register(RestaurantRequest request);

    void delete(Long restaurant_id);

}
