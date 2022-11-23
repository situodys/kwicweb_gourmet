package kw.ic.backend.domain.menu.dto.request;

import java.util.List;
import kw.ic.backend.global.dto.BasePageRequest;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MenuPageRequest extends BasePageRequest {

    private Long restaurantId;

    private String menuName;

    private Integer price;

    @Builder
    public MenuPageRequest(Integer page, Integer size, List<String> sorts, Long totalCount,
                           Long restaurantId, String menuName, Integer price) {
        super(page, size, sorts, totalCount);
        this.restaurantId = restaurantId;
        this.menuName = menuName;
        this.price = price;
    }

}
