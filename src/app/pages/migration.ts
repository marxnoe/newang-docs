import { Component } from '@angular/core';
import { NaAlert, NaCode, NaHeading, NaPage, NaStack, NaTable, NaText } from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  selector: 'docs-migration',
  imports: [NaAlert, NaCode, NaHeading, NaPage, NaStack, NaTable, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Migrate from NG-ZORRO</na-heading>
          <na-text tone="muted">
            newAng keeps the component vocabulary small, but the input names are deliberately close
            to NG-ZORRO. Most migrations are a selector swap plus a tone or variant rename — no
            consumer stylesheet required.
          </na-text>
        </na-stack>

        <na-alert tone="info" title="Start with the tone vocabulary">
          NG-ZORRO calls the error state <na-code>error</na-code>; newAng calls it
          <na-code>danger</na-code>. Everything else keeps the same name:
          <na-code>success</na-code>, <na-code>warning</na-code> and <na-code>info</na-code>.
        </na-alert>

        <na-stack gap="md">
          <na-heading level="2">Tone and prop map</na-heading>
          <na-table
            [columns]="[
              { key: 'zorro', header: 'NG-ZORRO' },
              { key: 'newang', header: 'newAng' },
              { key: 'note', header: 'Notes' },
            ]"
            [rows]="mapping"
            emptyMessage="No mappings."
          />
        </na-stack>

        <na-stack gap="md">
          <na-heading level="2">Form controls</na-heading>
          <na-text tone="muted">
            Use the same <na-code>[(ngModel)]</na-code> and <na-code>formControl</na-code> bindings
            you already have. The three value controls below implement
            <na-code>ControlValueAccessor</na-code>; native inputs keep their built-in CVA through
            <na-code>naInput</na-code>.
          </na-text>
          <na-table
            [columns]="[
              { key: 'control', header: 'Control' },
              { key: 'binding', header: 'ngModel / formControl' },
              { key: 'note', header: 'Notes' },
            ]"
            [rows]="cva"
            emptyMessage="No form controls."
          />
        </na-stack>

        <na-stack gap="md">
          <na-heading level="2">A migration in practice</na-heading>
          <na-text tone="muted"> Before — an NG-ZORRO alert and a primary button: </na-text>
          <docs-code-block [code]="before" />
          <na-text tone="muted">After — same markup, newAng selectors and inputs:</na-text>
          <docs-code-block [code]="after" />
        </na-stack>

        <na-stack gap="md">
          <na-heading level="2">Not covered yet</na-heading>
          <na-text tone="muted">
            newAng is intentionally smaller than NG-ZORRO. There is no date picker, dropdown menu,
            tree, calendar or notification toast yet. For simple selects, use a native
            <na-code>&lt;select naInput&gt;</na-code> inside <na-code>na-field</na-code>. For
            uploads, icons, copyable links and closable alerts, use the new 1.4 primitives.
          </na-text>
          <na-alert tone="success" title="The 1.4 migration primitives">
            <na-stack gap="sm">
              <na-text
                ><na-code>na-upload</na-code> replaces the common upload widget with progress,
                limits and per-file cancel/remove.</na-text
              >
              <na-text><na-code>na-icon</na-code> covers the closed 20-glyph set.</na-text>
              <na-text><na-code>na-link copyable</na-code> replaces copyable typography.</na-text>
            </na-stack>
          </na-alert>
        </na-stack>
      </na-stack>
    </na-page>
  `,
})
export class MigrationPage {
  protected readonly mapping = [
    {
      zorro: 'nzType="success|error|warning|info"',
      newang: 'tone="success|danger|warning|info"',
      note: 'error becomes danger.',
    },
    { zorro: 'nzMessage', newang: 'title', note: 'Alert / notification title.' },
    {
      zorro: 'nzDescription / ng-template',
      newang: 'description or projected body',
      note: 'Both can be used together.',
    },
    { zorro: 'nzShowIcon', newang: 'showIcon', note: 'Add icon="…" for an explicit glyph.' },
    {
      zorro: 'nz-button nzType="primary"',
      newang: '<na-button variant="primary">',
      note: 'Primary is the default variant.',
    },
    { zorro: 'nz-button [nzLoading]', newang: '[loading]', note: 'Also disables the button.' },
    {
      zorro: 'nz-input',
      newang: '<input naInput> + <na-field>',
      note: 'Native input, no wrapper component.',
    },
    {
      zorro: 'nz-select',
      newang: '<select naInput> + <na-field>',
      note: 'Simple cases only; no custom dropdown yet.',
    },
    { zorro: 'nz-upload', newang: '<na-upload>', note: 'Picker + drag, progress, limit, accept.' },
    { zorro: 'nz-icon', newang: '<na-icon>', note: 'Closed 20-glyph set.' },
    {
      zorro: 'nz-typography nzCopyable',
      newang: '<na-link copyable>',
      note: 'Clipboard with Copied! state.',
    },
    {
      zorro: 'nz-tabs / nz-tab',
      newang: '<na-tabs> / <na-tab id title>',
      note: 'Projected panels stay mounted.',
    },
    {
      zorro: 'nz-radio-group / nz-radio',
      newang: '<na-radio-group [options]>',
      note: 'No child radio elements.',
    },
    { zorro: 'nz-switch', newang: '<na-switch>', note: '[(checked)] or formControl.' },
    { zorro: 'nz-checkbox', newang: '<na-checkbox>', note: '[(checked)] or formControl.' },
    { zorro: 'nz-alert', newang: '<na-alert>', note: 'tone, title, description, closable.' },
    { zorro: 'nz-card', newang: '<na-card>', note: 'title / subtitle inputs.' },
    { zorro: 'nz-spin', newang: '<na-spinner>', note: 'Inline, no wrapper.' },
    {
      zorro: 'nz-modal',
      newang: '<na-modal [open]>',
      note: 'Escape, backdrop and ✕ emit (closed).',
    },
    { zorro: 'nz-tooltip', newang: 'naTooltip="…"', note: 'Attribute directive.' },
  ];

  protected readonly cva = [
    { control: 'na-switch', binding: 'Yes', note: 'boolean value.' },
    { control: 'na-checkbox', binding: 'Yes', note: 'boolean value.' },
    { control: 'na-radio-group', binding: 'Yes', note: 'string | number value; options array.' },
    {
      control: 'input / textarea / select[naInput]',
      binding: 'Native',
      note: 'Use na-field for label, hint and error.',
    },
    { control: 'na-upload', binding: 'No', note: 'Not a form control; use its outputs.' },
    { control: 'na-button, na-tabs', binding: 'No', note: 'Driven by inputs and outputs.' },
  ];

  protected readonly before = `<nz-alert nzType="error" nzMessage="Could not save" nzShowIcon></nz-alert>\n\n<button nz-button nzType="primary" [nzLoading]="saving">\n  Save\n</button>`;

  protected readonly after = `<na-alert tone="danger" title="Could not save" showIcon></na-alert>\n\n<na-button variant="primary" [loading]="saving">\n  Save\n</na-button>`;
}
