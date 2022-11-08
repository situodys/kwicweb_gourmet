package kw.ic.backend.domain.restaurant.core;

import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.restaurant.notification.Notification;
import kw.ic.backend.domain.restaurant.core.embbed.Address;
import kw.ic.backend.domain.restaurant.core.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.core.embbed.RunningTime;
import kw.ic.backend.global.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Restaurant extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private Long id;

    @Column(name="type", nullable = false)
    @Enumerated(EnumType.STRING)
    private RestaurantType type;

    @Embedded
    private Address address;

    @Embedded
    private RunningTime runningTime;

    @OneToMany(mappedBy = "restaurant")
    private List<Menu> menus = new ArrayList<>();

    @OneToMany(mappedBy = "restaurant")
    private List<Notification> notifications = new ArrayList<>();

    @Builder
    public Restaurant(RestaurantType type, Address address, RunningTime runningTime,List<Menu> menus, List<Notification> notifications) {
        Assert.notNull(type, "Restaurant type must not be empty");

        this.type=type;
        this.address = address;
        this.runningTime = runningTime;
        this.menus = menus;
        this.notifications = notifications;
    }
}
