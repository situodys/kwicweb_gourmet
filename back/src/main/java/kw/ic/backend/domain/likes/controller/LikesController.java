package kw.ic.backend.domain.likes.controller;

import kw.ic.backend.domain.likes.dto.LikesRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/likes")
public class LikesController {

    private final LikesSerivce likesSerivce;

    @PostMapping("/add")
    ResponseEntity<Long> add(@RequestBody LikesRequest likesRequest) {
        log.info("memberId {} like to restaurantId {}");

        Long likesId = likesSerivce.add(likesRequest);

        ResponseEntity.ok(likesId);
    }

    @PostMapping("/cancel")
    ResponseEntity<Long> cancel(@RequestBody LikesRequest likesRequest) {
        log.info("memberId {} cancel like to restaurantId {}");

        Long canceled = likesSerivce.cancel(likesRequest);

        ResponseEntity.ok(canceled);
    }
}
