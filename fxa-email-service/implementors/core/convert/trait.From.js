(function() {var implementors = {};
implementors["fxa_email_service"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/db/delivery_problems/struct.LegacyDeliveryProblem.html\" title=\"struct fxa_email_service::db::delivery_problems::LegacyDeliveryProblem\">LegacyDeliveryProblem</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/db/delivery_problems/struct.DeliveryProblem.html\" title=\"struct fxa_email_service::db::delivery_problems::DeliveryProblem\">DeliveryProblem</a>",synthetic:false,types:["fxa_email_service::db::delivery_problems::DeliveryProblem"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/db/delivery_problems/struct.DeliveryProblem.html\" title=\"struct fxa_email_service::db::delivery_problems::DeliveryProblem\">DeliveryProblem</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/db/delivery_problems/struct.LegacyDeliveryProblem.html\" title=\"struct fxa_email_service::db::delivery_problems::LegacyDeliveryProblem\">LegacyDeliveryProblem</a>",synthetic:false,types:["fxa_email_service::db::delivery_problems::LegacyDeliveryProblem"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RusotoError&lt;SendRawEmailError&gt;&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/queues/sqs/notification/struct.Notification.html\" title=\"struct fxa_email_service::queues::sqs::notification::Notification\">Notification</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/queues/notification/struct.Notification.html\" title=\"struct fxa_email_service::queues::notification::Notification\">GenericNotification</a>",synthetic:false,types:["fxa_email_service::queues::notification::Notification"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/queues/sqs/notification/struct.Mail.html\" title=\"struct fxa_email_service::queues::sqs::notification::Mail\">Mail</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/queues/notification/struct.Mail.html\" title=\"struct fxa_email_service::queues::notification::Mail\">GenericMail</a>",synthetic:false,types:["fxa_email_service::queues::notification::Mail"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/queues/sqs/notification/struct.Bounce.html\" title=\"struct fxa_email_service::queues::sqs::notification::Bounce\">Bounce</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/queues/notification/struct.Bounce.html\" title=\"struct fxa_email_service::queues::notification::Bounce\">GenericBounce</a>",synthetic:false,types:["fxa_email_service::queues::notification::Bounce"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fxa_email_service/queues/sqs/notification/enum.BounceType.html\" title=\"enum fxa_email_service::queues::sqs::notification::BounceType\">BounceType</a>&gt; for <a class=\"enum\" href=\"fxa_email_service/db/delivery_problems/enum.ProblemType.html\" title=\"enum fxa_email_service::db::delivery_problems::ProblemType\">ProblemType</a>",synthetic:false,types:["fxa_email_service::db::delivery_problems::ProblemType"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fxa_email_service/queues/sqs/notification/enum.BounceSubtype.html\" title=\"enum fxa_email_service::queues::sqs::notification::BounceSubtype\">BounceSubtype</a>&gt; for <a class=\"enum\" href=\"fxa_email_service/db/delivery_problems/enum.ProblemSubtype.html\" title=\"enum fxa_email_service::db::delivery_problems::ProblemSubtype\">ProblemSubtype</a>",synthetic:false,types:["fxa_email_service::db::delivery_problems::ProblemSubtype"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/queues/sqs/notification/struct.Complaint.html\" title=\"struct fxa_email_service::queues::sqs::notification::Complaint\">Complaint</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/queues/notification/struct.Complaint.html\" title=\"struct fxa_email_service::queues::notification::Complaint\">GenericComplaint</a>",synthetic:false,types:["fxa_email_service::queues::notification::Complaint"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fxa_email_service/queues/sqs/notification/enum.ComplaintFeedbackType.html\" title=\"enum fxa_email_service::queues::sqs::notification::ComplaintFeedbackType\">ComplaintFeedbackType</a>&gt; for <a class=\"enum\" href=\"fxa_email_service/db/delivery_problems/enum.ProblemSubtype.html\" title=\"enum fxa_email_service::db::delivery_problems::ProblemSubtype\">ProblemSubtype</a>",synthetic:false,types:["fxa_email_service::db::delivery_problems::ProblemSubtype"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/queues/sqs/notification/struct.Delivery.html\" title=\"struct fxa_email_service::queues::sqs::notification::Delivery\">Delivery</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/queues/notification/struct.Delivery.html\" title=\"struct fxa_email_service::queues::notification::Delivery\">GenericDelivery</a>",synthetic:false,types:["fxa_email_service::queues::notification::Delivery"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RusotoError&lt;ReceiveMessageError&gt;&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RusotoError&lt;SendMessageError&gt;&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RusotoError&lt;DeleteMessageError&gt;&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fxa_email_service/types/duration/struct.Duration.html\" title=\"struct fxa_email_service::types::duration::Duration\">Duration</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>",synthetic:false,types:[]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fxa_email_service/types/error/enum.AppErrorKind.html\" title=\"enum fxa_email_service::types::error::AppErrorKind\">AppErrorKind</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/lettre_email/0.9.2/lettre_email/error/enum.Error.html\" title=\"enum lettre_email::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/mime/0.3.13/mime/struct.FromStrError.html\" title=\"struct mime::FromStrError\">FromStrError</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;InvalidKeyLength&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.39/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RedisError&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/reqwest/0.9.18/reqwest/error/struct.Error.html\" title=\"struct reqwest::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SendgridError&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/lettre/0.9.2/lettre/smtp/error/enum.Error.html\" title=\"enum lettre::smtp::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.1.17/http/header/value/struct.ToStrError.html\" title=\"struct http::header::value::ToStrError\">ToStrError</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/url/1.7.0/url/parser/enum.ParseError.html\" title=\"enum url::parser::ParseError\">ParseError</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/struct.Utf8Error.html\" title=\"struct core::str::Utf8Error\">Utf8Error</a>&gt; for <a class=\"struct\" href=\"fxa_email_service/types/error/struct.AppError.html\" title=\"struct fxa_email_service::types::error::AppError\">AppError</a>",synthetic:false,types:["fxa_email_service::types::error::AppError"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
