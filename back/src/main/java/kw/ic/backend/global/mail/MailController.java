package kw.ic.backend.global.mail;

import java.util.Base64;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/email")
public class MailController {

    private final MailService mailService;
    private static final Base64.Decoder decoder = Base64.getDecoder();

    @GetMapping("/auth/{email}")
    public ResponseEntity<String> sendAuthEmail(@PathVariable("email") String emailAddress) throws Exception{
//        String decodedAddress = String.valueOf(decoder.decode(emailAddress));
        String authCode = mailService.sendAuthCodeEmail(emailAddress);

        return ResponseEntity.ok(authCode);
    }
}
