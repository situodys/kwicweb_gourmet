package kw.ic.backend.domain.restaurant.repository;

import java.util.List;
import kw.ic.backend.domain.restaurant.dto.projection.RestaurantStatic;
import kw.ic.backend.domain.restaurant.dto.request.RestaurantPageRequest;

public interface RestaurantRepositoryDSL {

    List<RestaurantStatic> findRestaurantsWithPagination(RestaurantPageRequest request);
}
