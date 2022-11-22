package kw.ic.backend.domain.menu.dto;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SimpleMenu {

    @NotNull
    private Long menuId;

    @NotNull
    private String menuName;
}
