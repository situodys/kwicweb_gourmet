package kw.ic.backend.domain.restaurant.dto.response;

import kw.ic.backend.domain.restaurant.entity.Restaurant;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

@Getter
@NoArgsConstructor
public class NotificationResponse {

    private Long id;

    private String previousContent;

    private String updatedContent;

    private Long restaurant_id;

    @Builder
    public NotificationResponse(Long id,String previousContent, String updatedContent, Long restaurant_id) {
        Assert.hasText(updatedContent,"updated content must not be empty");

        this.id = id;
        this.previousContent = previousContent;
        this.updatedContent = updatedContent;
        this.restaurant_id = restaurant_id;
    }
}
