import { Component } from '@angular/core';
import { NaAlert, NaHeading, NaPage, NaStack, NaTable, NaText } from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  imports: [NaAlert, NaHeading, NaPage, NaStack, NaTable, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Theme</na-heading>
          <na-text tone="muted">
            Dark-only. Neutral charcoal surfaces, pastel lime accent, square corners.
            Tokens live in newang/styles as !default SCSS variables
            mirrored to --na-* CSS custom properties — colors, type, spacing,
            radii and motion. Everything re-skins at runtime with plain CSS,
            no SCSS rebuild needed.
          </na-text>
        </na-stack>
        <na-alert tone="info" title="No Sass? Use the compiled entry">
          Plain-CSS apps can skip Sass entirely. Add
          <code>node_modules/newang/styles.css</code> to the
          <code>styles</code> array in angular.json. It contains the tokens,
          base styles and global directive styles; component styles come with
          the components. Keep the SCSS entry only when you need compile-time
          <code>$na-*</code> overrides.
        </na-alert>
        <na-table
          [columns]="[
            { key: 'token', header: 'Token' },
            { key: 'value', header: 'Value' },
            { key: 'use', header: 'Use' },
          ]"
          [rows]="tokens"
          emptyMessage="No tokens."
        />
        <na-stack gap="md">
          <na-heading level="2">Override</na-heading>
          <na-text tone="muted">Set variables before including base — they are all !default:</na-text>
          <docs-code-block [code]="override" />
          <na-text tone="muted" size="sm">
            With the compiled CSS entry, override the mirrored
            <code>--na-*</code> custom properties at runtime instead — no Sass
            rebuild required.
          </na-text>
        </na-stack>
        <na-alert tone="info" title="Bar-less alerts">
          Alert tone colors the title text — there is no side bar or background
          wash. Pick tone + title and let the component do the rest.
        </na-alert>
        <na-alert tone="danger" title="Banned in v1">
          linear-gradient, box-shadow (except none), text-shadow and drop-shadow are
          banned by stylelint. Flat elevation via 1px borders; focus is a 2px lime outline.
        </na-alert>
        <na-alert tone="info" title="Square by default, round on purpose">
          All corner radii ship as 0. The only round elements are radio dots,
          switch tracks/thumbs and spinner rings (rotation needs a circle).
          Everything else — cards, alerts, badges, avatars, progress, inputs,
          buttons, modals, tooltips — is square. Set --na-radius-sm/md/lg to
          bring roundness back globally, no SCSS rebuild needed.
        </na-alert>
      </na-stack>
    </na-page>
  `,
})
export class ThemePage {
  protected readonly tokens = [
    { token: '$na-bg / --na-bg', value: '#1a1a1a', description: '', use: 'App background' },
    { token: '$na-surface-1', value: '#232323', description: '', use: 'Card / input' },
    { token: '$na-surface-2', value: '#2b2b2b', description: '', use: 'Raised / hover' },
    { token: '$na-surface-3', value: '#333333', description: '', use: 'Active / selected' },
    { token: '$na-border', value: '#3a3a3a', description: '', use: 'Flat elevation' },
    { token: '$na-border-strong', value: '#525252', description: '', use: 'Strong borders' },
    { token: '$na-text', value: '#e8e8e8', description: '', use: 'Soft off-white (never #fff)' },
    { token: '$na-text-muted', value: '#a8a8a8', description: '', use: 'Secondary text' },
    { token: '$na-text-faint', value: '#808080', description: '', use: 'Captions / metadata' },
    { token: '$na-accent', value: '#cdea7f', description: '', use: 'Pastel lime — actions only' },
    { token: '$na-danger', value: '#e2a3a3', description: '', use: 'Desaturated matte red' },
    { token: '$na-success', value: '#a9d1a4', description: '', use: 'Matte green' },
    { token: '$na-warning', value: '#e3c88d', description: '', use: 'Matte amber' },
    { token: '$na-info', value: '#a9c6d4', description: '', use: 'Matte blue' },
    { token: '$na-radius-sm / md / lg', value: '0', description: '', use: 'Square corners everywhere' },
    { token: '$na-space-xs … --na-space-xl', value: '4 / 8 / 16 / 24 / 32px', description: '', use: 'The only spacing steps (gap inputs)' },
    { token: '$na-fs-xs … --na-fs-3xl', value: '12 / 13 / 14 / 16 / 18 / 24 / 30px', description: '', use: 'One type ramp — no ad-hoc sizes' },
    { token: '$na-weight-medium / semibold / bold', value: '500 / 600 / 700', description: '', use: 'The only font weights' },
    { token: '$na-control-h-sm / md / lg', value: '32 / 40 / 48px', description: '', use: 'Shared by inputs, buttons, tabs, form actions' },
    { token: '$na-dur', value: '120ms', description: '', use: 'Single transition duration for interactive bits' },
    { token: '$na-focus-ring / --na-focus-offset', value: '2px lime / 2px', description: '', use: 'Focus outline, everywhere the same' },
  ];
  protected readonly override = `@use 'newang/styles' as na with (\n  $na-accent: #d4f08a,\n  $na-bg: #1a1a1a\n);\n@include na.base();`;
}
