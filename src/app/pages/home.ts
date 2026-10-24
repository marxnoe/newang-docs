import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NaBadge,
  NaButton,
  NaCard,
  NaGrid,
  NaHeading,
  NaPage,
  NaRow,
  NaStack,
  NaText,
} from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  imports: [
    RouterLink,
    NaBadge,
    NaButton,
    NaCard,
    NaGrid,
    NaHeading,
    NaPage,
    NaRow,
    NaStack,
    NaText,
    CodeBlock,
  ],
  template: `
    <na-page maxWidth="lg">
      <na-stack gap="xl">
        <na-stack gap="md">
          <na-row gap="md" align="center">
            <na-heading level="1">newAng</na-heading>
            <na-badge tone="lime">v1.5.0</na-badge>
            <na-badge tone="neutral">dark-only</na-badge>
          </na-row>
          <na-text size="lg" tone="muted">
            Opinionated dark Angular component library. Pastel lime accent, flat static colors —
            no gradients, no glows. Near-zero consumer CSS.
          </na-text>
          <na-row gap="md">
            <a routerLink="/docs/install" style="text-decoration:none">
              <na-button variant="primary">Get started</na-button>
            </a>
            <a routerLink="/components/button" style="text-decoration:none">
              <na-button variant="secondary">Browse components</na-button>
            </a>
          </na-row>
          <na-text tone="accent" size="sm">
            New in 1.5: select, datepicker, dropdown, drawer, message/notification,
            popconfirm, pagination and skeleton.
          </na-text>
        </na-stack>

        <na-grid cols="3" gap="md">
          <na-card title="Dark by default" subtitle="One theme, done right">
            <na-text tone="muted">Neutral charcoal surfaces, soft off-white text. No light-mode branches to maintain.</na-text>
          </na-card>
          <na-card title="Flat & static" subtitle="Borders, not shadows">
            <na-text tone="muted">1px borders for elevation. Focus is a 2px lime outline. Gradients and glows are banned.</na-text>
          </na-card>
          <na-card title="Inputs, not CSS" subtitle="Zero consumer stylesheets">
            <na-text tone="muted">Spacing, type and layout live in gap, tone and variant inputs. Ships with Sass and a precompiled CSS entry.</na-text>
          </na-card>
        </na-grid>

        <na-stack gap="md">
          <na-heading level="2">Zero-CSS in 30 seconds</na-heading>
          <na-text tone="muted">No class=, no style=, no stylesheets. This is a complete sign-in form:</na-text>
          <docs-code-block [code]="heroSnippet" />
        </na-stack>

        <na-stack gap="md">
          <na-heading level="2">How these docs work</na-heading>
          <na-text tone="muted">
            Every component page follows the same NG-ZORRO-style recipe: when to use it, isolated live
            demos you can interact with, copy-paste code, a full API table, and do / don't rules.
            This site itself is built only with NewAng components.
          </na-text>
          <na-row gap="md">
            <a routerLink="/docs/zero-css" style="text-decoration:none">
              <na-button variant="secondary">Read the philosophy</na-button>
            </a>
            <a routerLink="/docs/theme" style="text-decoration:none">
              <na-button variant="ghost">Theme tokens</na-button>
            </a>
          </na-row>
        </na-stack>
      </na-stack>
    </na-page>
  `,
})
export class HomePage {
  protected readonly heroSnippet = `<na-app>\n  <na-page maxWidth="md">\n    <na-stack gap="lg">\n      <na-heading level="1">Sign in</na-heading>\n      <na-field label="Email" hint="Work email">\n        <input naInput placeholder="you@co.com" />\n      </na-field>\n      <na-button variant="primary">Login</na-button>\n    </na-stack>\n  </na-page>\n</na-app>`;
}
