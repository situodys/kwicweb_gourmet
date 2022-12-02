package kw.ic.backend;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Random;
import java.util.stream.IntStream;
import kw.ic.backend.domain.likes.Likes;
import kw.ic.backend.domain.likes.repository.LikesRepository;
import kw.ic.backend.domain.member.Member;
import kw.ic.backend.domain.member.dto.embbed.Authority;
import kw.ic.backend.domain.member.repository.MemberRepository;
import kw.ic.backend.domain.menu.Menu;
import kw.ic.backend.domain.menu.ReviewedMenu;
import kw.ic.backend.domain.menu.repository.MenuRepository;
import kw.ic.backend.domain.menu.repository.ReviewedMenuRepository;
import kw.ic.backend.domain.notification.Notification;
import kw.ic.backend.domain.notification.repository.NotificationRepository;
import kw.ic.backend.domain.proposal.Proposal;
import kw.ic.backend.domain.proposal.dto.embbed.Category;
import kw.ic.backend.domain.proposal.repository.ProposalRepository;
import kw.ic.backend.domain.restaurant.dto.embbed.Address;
import kw.ic.backend.domain.restaurant.dto.embbed.RestaurantType;
import kw.ic.backend.domain.restaurant.dto.embbed.RunningTime;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import kw.ic.backend.domain.restaurant.repository.RestaurantRepository;
import kw.ic.backend.domain.review.entity.Review;
import kw.ic.backend.domain.review.repository.ReviewRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@ActiveProfiles("dev")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class Dummies {

    private static final Random random = new Random();

    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    MenuRepository menuRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    LikesRepository likesRepository;
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    NotificationRepository notificationRepository;
    @Autowired
    ProposalRepository proposalRepository;
    @Autowired
    ReviewedMenuRepository reviewedMenuRepository;

    private RestaurantType pickType() {
        int rn = random.nextInt(3);
        if (rn == 0) {
            return RestaurantType.KOREAN;
        }
        if (rn == 1) {
            return RestaurantType.CHINESE;
        }
        if (rn == 2) {
            return RestaurantType.WESTERN;
        }
        return RestaurantType.JAPANESE;
    }

    private Category pickCategory() {
        int rn = random.nextInt(4);
        if (rn == 0) {
            return Category.PRICE;
        }
        if (rn == 1) {
            return Category.MENU_NAME;
        }
        if (rn == 2) {
            return Category.CLOSE_TIME;
        }
        return Category.OPEN_TIME;
    }

    @Test
    @Order(1)
    @Transactional
    @Commit
    public void insertRestaurants() throws Exception {
        IntStream.rangeClosed(1, 50)
                .forEach(idx -> {
                    Restaurant restaurant = Restaurant.builder()
                            .name("name" + idx)
                            .description("description" + idx)
                            .type(pickType())
                            .address(new Address("city" + idx, "street" + idx, "zipcode" + idx))
                            .runningTime(new RunningTime(LocalDateTime.now(), LocalDateTime.now()))
                            .build();

                    restaurantRepository.save(restaurant);
                });
    }

    @Test
    @Order(2)
    @Transactional
    @Commit
    public void insertMenus() throws Exception {
        int idx = 1;
        for (long restaurantId = 1; restaurantId <= 50; restaurantId++) {
            for (long menuCount = 0; menuCount < 21; menuCount++) {
                Menu menu = Menu.builder()
                        .menuName("menuName" + idx)
                        .price(idx * 100)
                        .description("description" + idx)
                        .restaurant(restaurantRepository.getReferenceById(restaurantId))
                        .build();

                menuRepository.save(menu);
                idx++;
            }
        }

        for (int i = 1051; i <= 1070; i++) {
            Menu menu = Menu.builder()
                    .menuName("menuName" + i)
                    .price(i * 100)
                    .description("description" + i)
                    .restaurant(restaurantRepository.getReferenceById(50L))
                    .build();
            menuRepository.save(menu);
        }
    }

    @Test
    @Order(3)
    @Transactional
    @Commit
    public void insertMembers() throws Exception {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        IntStream.rangeClosed(1, 50)
                .forEach(idx -> {
                    Member member = Member.builder()
                            .email("email" + idx)
                            .password("password" + idx)
                            .authority(Authority.ROLE_USER)
                            .build();

                    memberRepository.save(member);
                });
        Member member = Member.builder()
                .email("admin")
                .password(passwordEncoder.encode(Base64.encodeBase64String("admin".getBytes(StandardCharsets.UTF_8))))
                .authority(Authority.ROLE_ADMIN)
                .build();
        memberRepository.save(member);
    }

    @Test
    @Order(4)
    @Transactional
    @Commit
    public void insertLikes() throws Exception {

        for (long restaurantId = 1; restaurantId <= 50; restaurantId++) {
            for (int memberId = 1; memberId <= restaurantId; memberId++) {
                Likes likes = Likes.builder()
                        .restaurant(restaurantRepository.getReferenceById(restaurantId))
                        .member(memberRepository.getReferenceById((long) memberId))
                        .build();
                likesRepository.save(likes);
            }
        }
    }

    @Test
    @Order(5)
    @Transactional
    @Commit
    public void insertReviews() throws Exception {

        int idx = 1;

        for (long memberId = 1; memberId <= 50; memberId++) {
            for (long restaurantId = 1; restaurantId <= memberId; restaurantId++) {
                Review review = Review.builder()
                        .title("title" + idx)
                        .rating(random.nextInt(5))
                        .content("content" + idx)
                        .restaurant(restaurantRepository.getReferenceById(restaurantId))
                        .member(memberRepository.getReferenceById(memberId))
                        .build();

                reviewRepository.save(review);
                idx++;
            }
        }
    }

//    @Test
//    @Order(6)
//    @Transactional
//    @Commit
//    public void insertNotifications() throws Exception {
//
//        int idx = 1;
//
//        for (long restaurantId = 1; restaurantId <= 50; restaurantId++) {
//            for (long i = 1; i <= 25; i++) {
//                Notification notification = Notification.builder()
//                        .updatedContent("updatedContent" + idx)
//                        .previousContent("previousContent" + idx)
//                        .restaurant(restaurantRepository.getReferenceById((long) restaurantId))
//                        .build();
//                notificationRepository.save(notification);
//                idx++;
//            }
//        }
//    }

    @Test
    @Order(6)
    @Transactional
    @Commit
    public void insertProposal() throws Exception {

        int idx = 1;

        for (long memberId = 1; memberId <= 50; memberId++) {
            for (long restaurantId = 1; restaurantId <= memberId; restaurantId++) {
                Category category = pickCategory();
                Proposal proposal;
                if(category.equals(Category.MENU_NAME) || category.equals(Category.PRICE)){
                     proposal = Proposal.builder()
                            .title("title"+idx)
                            .content("content" + idx)
                            .category(category)
                            .status("wait")
                            .restaurant(restaurantRepository.getReferenceById(restaurantId))
                            .member(memberRepository.getReferenceById(memberId))
                            .menu(menuRepository.getReferenceById((long)random.nextInt(1000)+1))
                            .build();
                }else{
                     proposal = Proposal.builder()
                            .title("title"+idx)
                            .content("content" + idx)
                            .category(category)
                            .status("wait")
                            .restaurant(restaurantRepository.getReferenceById(restaurantId))
                            .member(memberRepository.getReferenceById(memberId))
                            .menu(null)
                            .build();
                }
                proposalRepository.save(proposal);
                idx++;
            }
        }
    }

    @Test
    @Order(7)
    @Transactional
    @Commit
    public void insertReviewedMenus() throws Exception {

        String[] menuNames = new String[]{"김치찌개", "피자", "치킨"};

        for (long reviewId = 1; reviewId <= 100; reviewId++) {
            for (int i = 0; i <= reviewId % 3; i++) {
                ReviewedMenu reviewedMenu = ReviewedMenu.builder()
                        .review(reviewRepository.getReferenceById(reviewId))
                        .menu(menuRepository.getReferenceById((long) i+1))
                        .menuName(menuNames[i])
                        .build();

                reviewedMenuRepository.save(reviewedMenu);
            }
        }
    }
}
