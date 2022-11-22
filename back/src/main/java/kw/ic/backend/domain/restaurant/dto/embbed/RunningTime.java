package kw.ic.backend.domain.restaurant.dto.embbed;

import lombok.*;

import javax.persistence.Embeddable;
import java.time.LocalDateTime;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RunningTime {

    LocalDateTime openAt;
    LocalDateTime closeAt;

    @Builder
    public RunningTime(LocalDateTime openAt, LocalDateTime closeAt) {
        this.openAt = openAt;
        this.closeAt = closeAt;
    }

    public void changeOpenAt(LocalDateTime updatedOpenAt) {
        this.openAt = updatedOpenAt;
    }

    public void changeCloseAt(LocalDateTime updatedCloseAt) {
        this.closeAt = updatedCloseAt;
    }

}
