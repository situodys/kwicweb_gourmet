package kw.ic.backend.domain.restaurant.dto;

import java.util.List;
import java.util.stream.Collectors;
import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.menu.MenuResponse;
import kw.ic.backend.domain.restaurant.dto.response.NotificationResponse;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantResponse;
import kw.ic.backend.domain.restaurant.entity.Notification;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import org.springframework.stereotype.Component;


@Component
public class RestaurantResponseAssembler {

    public RestaurantResponse restaurantResponse(Restaurant restaurant) {
        return RestaurantResponse.builder().
                id(restaurant.getId()).
                type(restaurant.getType())
                .address(restaurant.getAddress())
                .runningTime(restaurant.getRunningTime())
                .menus(menuResponses(restaurant.getMenus()))
                .notifications(notificationResponses(restaurant.getNotifications()))
                .build();
    }

    private List<MenuResponse> menuResponses(List<Menu> menus) {
        if (isNull(menus)) {
            return List.of();
        }
        return menus.stream()
                .map(Menu::toResponse)
                .collect(Collectors.toList());
    }

    private List<NotificationResponse> notificationResponses(List<Notification> notifications) {
        if (isNull(notifications)) {
            return List.of();
        }
        return notifications.stream()
                .map(Notification::toResponse)
                .collect(Collectors.toList());
    }

    private boolean isNull(List<?> lists) {
        return lists == null;
    }
}
