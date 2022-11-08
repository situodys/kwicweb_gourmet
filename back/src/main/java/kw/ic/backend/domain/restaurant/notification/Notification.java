package kw.ic.backend.domain.restaurant.notification;

import kw.ic.backend.domain.restaurant.core.Restaurant;
import kw.ic.backend.global.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.util.Assert;

@Entity(name = "announcement")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Notification extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "announcement_id")
    private Long id;

    @Column(name = "previous_content")
    private String previousContent;

    @Column(name = "updated_content")
    private String updatedContent;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Restaurant restaurant;

    @Builder
    public Notification(String previousContent, String updatedContent, Restaurant restaurant) {
        Assert.hasText(updatedContent,"updated content must not be empty");

        this.previousContent = previousContent;
        this.updatedContent = updatedContent;
        this.restaurant = restaurant;
    }
}
