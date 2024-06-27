# Voice4Rights - Empowering Voices for Human Rights

Welcome to the official repository of Voice4Rights, a web platform dedicated to facilitating the reporting, discussion, and advocacy of human rights issues worldwide. Our mission is to create a safe and secure environment where individuals can come together to share their stories, support one another, and contribute to the global fight for human rights.

## Features

Voice4Rights is designed to be user-friendly, with features developed to meet the needs of our community. Here are the milestones that guide our development process:

### Milestone 1: Basic Functionality Setup

- **User Account Registration**: Users can create an account to access the platform's features.
- **Secure Login**: Secure login functionality ensures that user accounts are protected.
- **Report Submission**: Users can submit detailed reports of human rights violations.
- **Violation Reports Listing**: A publicly accessible list of reported violations is available for users to view.

### Milestone 2: Donation Feature Implementation

- **Charity Listings**: Users can view a list of charities that support human rights causes.
- **Donation Functionality**: Facilitates the process for users to donate to the charity of their choice.
- **Donation History**: Users can view their history of donations to track their contributions.

### Milestone 3: Discussion Forum Integration

- **Discussion Topic Creation**: Users can create new topics in the discussion forum.
- **Discussion Listings**: A comprehensive list of discussion topics is available for users to browse.
- **Forum Participation**: Users can engage in discussions by posting comments on topics.

### Milestone 4: User Experience Enhancement

- **Notifications**: Users receive notifications for new replies in discussions they are participating in.
- **Profile Editing**: Users can update their profile information to keep their account current.
- **Password Reset**: Provides users with the ability to reset their passwords if forgotten.

### Milestone 5: Chatbot Integration

- **Chatbot Assistance**: A chatbot is available to provide users with assistance and information on human rights issues.
- **Guidance and Resources**: The chatbot offers resources and guidance on reporting violations, donating, and engaging in discussions.
- **Platform-wide Accessibility**: The chatbot can be accessed from any page within the platform, ensuring help is always at hand.

## Team Members

The development and maintenance of Voice4Rights are carried out by a dedicated team passionate about human rights. You can reach out to any of our team members for more information or to get involved:

- Jugal Wable: [wable.j@northeastern.edu](mailto:wable.j@northeastern.edu)
- Kesha Mehta: [mehta.ke@northeastern.edu](mailto:mehta.ke@northeastern.edu)
- Shantan Dadi: [dadi.s@northeastern.edu](mailto:dadi.s@northeastern.edu)
- Priyanka Shinde: [shinde.pri@northeastern.edu](mailto:shinde.pri@northeastern.edu)

We welcome contributions, suggestions, and feedback from our community. Together, we can make a difference in the fight for human rights around the globe.

## OBJECT MODEL


```mermaid
classDiagram

    class User {
        +String userID
        +String username
        +String email
        +String password
        +register()
        +sendDonation(amount)
    }

    class Blog {
        +String blogID
        +String title
        +String content
        +DateTime postedAt
        +User postedBy
        +String category
        +read()
        +comment(commentText)
    }

    class NGO {
        +String ngoID
        +String name
        +String contactInfo
        +register()
        +receiveDonation(amount)
        +publishBlog(title, content, category)
    }

    class Donation {
        +String donationID
        +Float amount
        +DateTime donatedAt
        +User donatedBy
        +NGO receivedBy
    }

    class Comment {
        +String commentID
        +String content
        +DateTime commentedAt
        +User commentedBy
        +Blog blog
    }

    class Category {
        +String categoryID
        +String name
    }

    class Chatbot {
        +String sessionID
        +DateTime startedAt
        +replyToUser(message)
        +connectToNGO(ngoID)
    }

    User "1" -- "*" Donation : makes
    NGO "1" -- "*" Donation : receives
    NGO "1" -- "*" Blog : publishes
    Blog "*" -- "*" Comment : has_comments
    User "*" -- "*" Comment : writes
    User "*" -- "1" Chatbot : interacts_with
    NGO "*" -- "1" Chatbot : assisted_by
    Blog "n" -- "1" Category : categorized_under

