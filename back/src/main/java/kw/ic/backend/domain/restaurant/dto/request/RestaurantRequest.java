package kw.ic.backend.domain.restaurant.dto.request;

import kw.ic.backend.domain.restaurant.entity.Restaurant;
import kw.ic.backend.domain.restaurant.dto.embbed.Address;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.dto.embbed.RunningTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RestaurantRequest {

    private RestaurantType type;

    private Address address;

    private RunningTime runningTime;

    public Restaurant toRestaurant() {
        return Restaurant.builder()
                .type(type)
                .address(address)
                .runningTime(runningTime)
                .build();
    }
}
