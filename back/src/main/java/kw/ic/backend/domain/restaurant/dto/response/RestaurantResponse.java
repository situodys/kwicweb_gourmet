package kw.ic.backend.domain.restaurant.dto.response;

import java.util.ArrayList;
import java.util.List;
import kw.ic.backend.domain.menu.MenuResponse;
import kw.ic.backend.domain.restaurant.dto.embbed.Address;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.dto.embbed.RunningTime;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RestaurantResponse {

    private Long id;

    private RestaurantType type;

    private Address address;

    private RunningTime runningTime;

    private List<MenuResponse> menus = new ArrayList<>();

    private List<NotificationResponse> notifications = new ArrayList<>();

    @Builder
    public RestaurantResponse(Long id, RestaurantType type, Address address, RunningTime runningTime, List<MenuResponse> menus,
                              List<NotificationResponse> notifications) {
        this.id = id;
        this.type = type;
        this.address = address;
        this.runningTime = runningTime;
        this.menus=menus;
        this.notifications = notifications;
    }
}
