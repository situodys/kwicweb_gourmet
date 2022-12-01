package kw.ic.backend.domain.likes.repository;

import kw.ic.backend.domain.likes.Likes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikesRepository extends JpaRepository<Likes,Long> {

    public boolean existsByMemberIdAndRestaurantId(Long memberId, Long restaurantId);
}
