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
            you already have. The value controls below implement
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
          <na-heading level="2">Still not covered</na-heading>
          <na-text tone="muted">
            newAng is intentionally smaller than NG-ZORRO. There is no tree, calendar, carousel,
            transfer or rich-text editor. The 1.5 parity set now covers select, datepicker,
            dropdown, drawer, message/notification, popconfirm, pagination and skeleton. For
            uploads, icons, copyable links and closable alerts, keep using the 1.4 primitives.
          </na-text>
          <na-alert tone="success" title="The 1.5 migration primitives">
            <na-stack gap="sm">
              <na-text
                ><na-code>na-select</na-code> replaces nz-select with CVA, disabled options and a
                keyboard-driven listbox.</na-text
              >
              <na-text
                ><na-code>na-datepicker</na-code> keeps the native date picker and adds min/max,
                label, hint and error.</na-text
              >
              <na-text
                ><na-code>na-dropdown</na-code>, <na-code>na-drawer</na-code> and
                <na-code>na-popconfirm</na-code> cover menus, side panels and confirmations.</na-text
              >
              <na-text
                ><na-code>NaMessage</na-code> / <na-code>NaNotification</na-code> cover toasts,
                while <na-code>na-pagination</na-code> and <na-code>na-skeleton</na-code> round out
                the set.</na-text
              >
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
      zorro: 'nz-select / nz-option',
      newang: '<na-select [options]>',
      note: 'CVA; custom listbox with disabled options and keyboard support.',
    },
    {
      zorro: 'nz-date-picker',
      newang: '<na-datepicker>',
      note: 'CVA; keeps the native date picker, min/max ISO bounds.',
    },
    {
      zorro: 'nz-dropdown',
      newang: '<na-dropdown [items]>',
      note: 'Keyboard menu; disabled and danger items.',
    },
    {
      zorro: 'nz-drawer',
      newang: '<na-drawer [open]>',
      note: 'left/right position; Escape and backdrop emit (closed).',
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
    {
      zorro: 'nz-popconfirm',
      newang: '<na-popconfirm>',
      note: 'Projected trigger; confirmed/cancelled outputs.',
    },
    {
      zorro: 'nz-message',
      newang: 'NaMessage service',
      note: 'aria-live stack; duration 0 is sticky.',
    },
    {
      zorro: 'nz-notification',
      newang: 'NaNotification service',
      note: 'Larger message variant; 6s default.',
    },
    {
      zorro: 'nz-pagination',
      newang: '<na-pagination>',
      note: '1-based page model; bounded window.',
    },
    {
      zorro: 'nz-skeleton',
      newang: '<na-skeleton>',
      note: 'lines, circle, width/height and optional label.',
    },
    { zorro: 'nz-tooltip', newang: 'naTooltip="…"', note: 'Attribute directive.' },
  ];

  protected readonly cva = [
    { control: 'na-switch', binding: 'Yes', note: 'boolean value.' },
    { control: 'na-checkbox', binding: 'Yes', note: 'boolean value.' },
    { control: 'na-radio-group', binding: 'Yes', note: 'string | number value; options array.' },
    { control: 'na-select', binding: 'Yes', note: 'string | number value; options array.' },
    {
      control: 'na-datepicker',
      binding: 'Yes',
      note: 'YYYY-MM-DD string; Date accepted on write.',
    },
    {
      control: 'input / textarea / select[naInput]',
      binding: 'Native',
      note: 'Use na-field for label, hint and error.',
    },
    {
      control: 'na-upload, na-dropdown, na-popconfirm',
      binding: 'No',
      note: 'Driven by inputs and outputs.',
    },
    { control: 'na-button, na-tabs', binding: 'No', note: 'Driven by inputs and outputs.' },
  ];

  protected readonly before = `<nz-alert nzType="error" nzMessage="Could not save" nzShowIcon></nz-alert>\n\n<button nz-button nzType="primary" [nzLoading]="saving">\n  Save\n</button>`;

  protected readonly after = `<na-alert tone="danger" title="Could not save" showIcon></na-alert>\n\n<na-button variant="primary" [loading]="saving">\n  Save\n</na-button>`;
}
