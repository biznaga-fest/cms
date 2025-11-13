import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaqEntry extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_entries';
  info: {
    description: '';
    displayName: 'FAQ Entry';
    icon: 'bullhorn';
  };
  attributes: {
    body: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'atlas';
  };
  attributes: {
    href: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HallOfFameHallOfFameItem extends Struct.ComponentSchema {
  collectionName: 'components_hall_of_fame_hall_of_fame_items';
  info: {
    displayName: 'HallOfFameItem';
    icon: 'archway';
  };
  attributes: {
    edition: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LastEditionLastEdition extends Struct.ComponentSchema {
  collectionName: 'components_last_edition_last_editions';
  info: {
    displayName: 'Last Edition';
    icon: 'arrow-left';
  };
  attributes: {
    gallery: Schema.Attribute.Media<'images', true>;
    video_url: Schema.Attribute.Text;
  };
}

export interface LastEditionPreviousEdition extends Struct.ComponentSchema {
  collectionName: 'components_last_edition_previous_editions';
  info: {
    displayName: 'Previous Edition';
    icon: 'undo-alt';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface RafflesRaffle extends Struct.ComponentSchema {
  collectionName: 'components_raffles_raffles';
  info: {
    displayName: 'raffle';
    icon: 'dice-d6';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ScheduleScheduleEvent extends Struct.ComponentSchema {
  collectionName: 'components_schedule_schedule_events';
  info: {
    description: '';
    displayName: 'ScheduleEvent';
    icon: 'at';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    kind: Schema.Attribute.Enumeration<['break', 'nobreak']>;
    language: Schema.Attribute.String;
    location: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    time_end: Schema.Attribute.String;
    time_start: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topic: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['lecture', 'workshop']>;
  };
}

export interface SocialsSocials extends Struct.ComponentSchema {
  collectionName: 'components_socials_socials';
  info: {
    description: '';
    displayName: 'Socials';
    icon: 'address-book';
  };
  attributes: {
    devto: Schema.Attribute.String;
    github: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    mail: Schema.Attribute.Email;
    mastodon: Schema.Attribute.String;
    medium: Schema.Attribute.String;
    twitch: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    website: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface SpeakersCallForPapers extends Struct.ComponentSchema {
  collectionName: 'components_speakers_call_for_papers';
  info: {
    description: '';
    displayName: 'Call For Papers';
    icon: 'child';
  };
  attributes: {
    is_enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'C4P Is Open!'>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SpeakersSpeakerEvent extends Struct.ComponentSchema {
  collectionName: 'components_speakers_speaker_events';
  info: {
    description: '';
    displayName: 'Speaker Event';
    icon: 'comment';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    description: Schema.Attribute.RichText;
    duration_in_minutes: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    place: Schema.Attribute.String;
    speakers: Schema.Attribute.Relation<'oneToMany', 'api::speaker.speaker'>;
    type: Schema.Attribute.Enumeration<['lecture', 'workshop']> &
      Schema.Attribute.Required;
  };
}

export interface SponsorsDossier extends Struct.ComponentSchema {
  collectionName: 'components_sponsors_dossiers';
  info: {
    description: '';
    displayName: 'Dossier';
    icon: 'ad';
  };
  attributes: {
    english: Schema.Attribute.Media<'files'>;
    is_enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    spanish: Schema.Attribute.Media<'files'>;
  };
}

export interface SponsorsJobOffer extends Struct.ComponentSchema {
  collectionName: 'components_sponsors_job_offers';
  info: {
    description: '';
    displayName: 'Job Offer';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface StaffTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_staff_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
    icon: 'grin';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    position: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'socials.socials', false>;
    type: Schema.Attribute.Enumeration<['organizer', 'staff']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'staff'>;
  };
}

export interface TicketsCompanyTicketsNotice extends Struct.ComponentSchema {
  collectionName: 'components_tickets_company_tickets_notices';
  info: {
    displayName: 'CompanyTicketsNotice';
    icon: 'align-justify';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TicketsPerk extends Struct.ComponentSchema {
  collectionName: 'components_tickets_perks';
  info: {
    description: '';
    displayName: 'Perk';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TicketsTshirt extends Struct.ComponentSchema {
  collectionName: 'components_tickets_tshirts';
  info: {
    description: '';
    displayName: 'Tshirt';
    icon: 'user-alt';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.Required;
  };
}

export interface VenueHowToArrive extends Struct.ComponentSchema {
  collectionName: 'components_venue_how_to_arrives';
  info: {
    displayName: 'How To Arrive';
    icon: 'car-side';
  };
  attributes: {
    by_bike: Schema.Attribute.RichText;
    by_bus: Schema.Attribute.RichText;
    by_subway: Schema.Attribute.RichText;
  };
}

export interface VenueVenue extends Struct.ComponentSchema {
  collectionName: 'components_venue_venues';
  info: {
    description: '';
    displayName: 'Venue';
    icon: 'building';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    how_to_arrive: Schema.Attribute.Component<'venue.how-to-arrive', false> &
      Schema.Attribute.Required;
    map_url: Schema.Attribute.Text & Schema.Attribute.Required;
    pictures: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq-entry': FaqFaqEntry;
      'footer.footer-link': FooterFooterLink;
      'hall-of-fame.hall-of-fame-item': HallOfFameHallOfFameItem;
      'last-edition.last-edition': LastEditionLastEdition;
      'last-edition.previous-edition': LastEditionPreviousEdition;
      'raffles.raffle': RafflesRaffle;
      'schedule.schedule-event': ScheduleScheduleEvent;
      'socials.socials': SocialsSocials;
      'speakers.call-for-papers': SpeakersCallForPapers;
      'speakers.speaker-event': SpeakersSpeakerEvent;
      'sponsors.dossier': SponsorsDossier;
      'sponsors.job-offer': SponsorsJobOffer;
      'staff.team-member': StaffTeamMember;
      'tickets.company-tickets-notice': TicketsCompanyTicketsNotice;
      'tickets.perk': TicketsPerk;
      'tickets.tshirt': TicketsTshirt;
      'venue.how-to-arrive': VenueHowToArrive;
      'venue.venue': VenueVenue;
    }
  }
}
