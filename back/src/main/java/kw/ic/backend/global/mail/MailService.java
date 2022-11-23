package kw.ic.backend.global.mail;

import java.util.UUID;
import java.util.logging.Logger;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MailService {

    private final MailUtil mailUtil;

    public String sendAuthCodeEmail(String userEmailAddress) throws Exception {
        String authCode = mailUtil.generateAuthCode();

        mailUtil.sendMail(userEmailAddress, authCode);

        log.info("{}: {}", userEmailAddress, authCode);

        return authCode;
    }
}
