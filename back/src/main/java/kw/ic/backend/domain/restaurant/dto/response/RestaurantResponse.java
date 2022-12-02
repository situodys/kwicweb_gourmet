package kw.ic.backend.domain.restaurant.dto.response;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotNull;
import kw.ic.backend.domain.menu.dto.response.MenuResponse;
import kw.ic.backend.domain.restaurant.dto.embbed.Address;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.dto.embbed.RunningTime;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RestaurantResponse {

    @NotNull
    private Long restaurantId;

    @NotNull
    private String name;

    private String description;

    @NotNull
    private RestaurantType type;

    @NotNull
    private Address address;

    @NotNull
    private RunningTime runningTime;

    private List<MenuResponse> menus = new ArrayList<>();

    private List<NotificationResponse> notifications = new ArrayList<>();

    private Boolean isLike;

    @Builder
    public RestaurantResponse(Long restaurantId, String name, String description, RestaurantType type, Address address, RunningTime runningTime, List<MenuResponse> menus,
                              List<NotificationResponse> notifications, Boolean isLike) {
        this.restaurantId = restaurantId;
        this.name = name;
        this.description = description;
        this.type = type;
        this.address = address;
        this.runningTime = runningTime;
        this.menus=menus;
        this.notifications = notifications;
        this.isLike = isLike;
    }
}
