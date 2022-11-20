package kw.ic.backend.domain.likes.service;

import kw.ic.backend.domain.likes.Likes;
import kw.ic.backend.domain.likes.dto.LikesRequest;
import kw.ic.backend.domain.likes.repository.LikesRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class LikesService {

    private final LikesRepository likesRepository;


    public Long add(LikesRequest likesRequest) {
        Likes likes = likesRepository.save(likesRequest.toLikes());

        return likes.getId();
    }

    public void cancel(LikesRequest likesRequest) {
        likesRepository.delete(likesRequest.toLikes());
    }
}
