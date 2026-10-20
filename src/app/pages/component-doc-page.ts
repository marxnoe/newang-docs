import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
  NaAlert,
  NaAvatar,
  NaBadge,
  NaBreadcrumbs,
  NaButton,
  NaCard,
  NaCheckbox,
  NaCode,
  NaDivider,
  NaEmptyState,
  NaField,
  NaFooter,
  NaForm,
  NaGrid,
  NaHeader,
  NaHeading,
  NaIcon,
  NaInput,
  NaLink,
  NaList,
  NaModal,
  NaPage,
  NaProgress,
  NaRadioGroup,
  NaRow,
  NaSpacer,
  NaSpinner,
  NaSplit,
  NaStack,
  NaSwitch,
  NaTab,
  NaTable,
  NaTabs,
  NaText,
  NaToolbar,
  NaTooltip,
  NaUpload,
} from 'newang';
import type { NaIconName, NaUploadChangeEvent } from 'newang';
import { COMPONENT_DOCS } from '../data/component-docs';
import { DemoCard } from '../shared/demo-card';
import { CodeBlock } from '../shared/code-block';
import { ApiTable } from '../shared/api-table';

@Component({
  imports: [
    RouterLink,
    NaAlert,
    NaAvatar,
    NaBadge,
    NaBreadcrumbs,
    NaButton,
    NaCard,
    NaCheckbox,
    NaCode,
    NaDivider,
    NaEmptyState,
    NaField,
    NaFooter,
    NaForm,
    NaGrid,
    NaHeader,
    NaHeading,
    NaIcon,
    NaInput,
    NaLink,
    NaList,
    NaModal,
    NaPage,
    NaProgress,
    NaRadioGroup,
    NaRow,
    NaSpacer,
    NaSpinner,
    NaSplit,
    NaStack,
    NaSwitch,
    NaTab,
    NaTable,
    NaTabs,
    NaText,
    NaToolbar,
    NaTooltip,
    NaUpload,
    DemoCard,
    CodeBlock,
    ApiTable,
  ],
  template: `
    @if (doc(); as d) {
      <na-page maxWidth="md">
        <na-stack gap="lg">
          <na-stack gap="md">
            <na-breadcrumbs [items]="['Components', d.area, d.name]" />
            <na-row gap="md" align="center">
              <na-heading level="1">{{ d.name }}</na-heading>
              <na-badge tone="neutral">{{ d.selector }}</na-badge>
            </na-row>
            <na-text size="lg" tone="muted">{{ d.description }}</na-text>
            <na-alert tone="info" title="When to use">{{ d.whenToUse }}</na-alert>
            <na-alert tone="success" title="Zero-CSS rule">{{ d.zeroCssRule }}</na-alert>
          </na-stack>

          <na-stack gap="md">
            <na-heading level="2">Examples</na-heading>
            @switch (d.slug) {
              @case ('button') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-row gap="md">
                    <na-button variant="primary">Save</na-button>
                    <na-button variant="secondary">Cancel</na-button>
                    <na-button variant="ghost">Later</na-button>
                    <na-button variant="danger">Delete</na-button>
                  </na-row>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    <na-row gap="md">
                      <na-button size="sm">Small</na-button>
                      <na-button size="md">Medium</na-button>
                      <na-button size="lg">Large</na-button>
                    </na-row>
                    <na-row gap="md">
                      <na-button disabled>Disabled</na-button>
                      <na-button loading>Loading</na-button>
                    </na-row>
                    <na-button fullWidth>Full width</na-button>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[2].title" [description]="d.demos[2].description" [code]="d.demos[2].code">
                  <na-row gap="md" align="center">
                    <na-button variant="primary" (pressed)="pressCount.set(pressCount() + 1)">Save changes</na-button>
                    <na-text tone="muted" size="sm">Pressed {{ pressCount() }}×</na-text>
                  </na-row>
                </docs-demo-card>
              }
              @case ('field') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-field label="Email" hint="Work email">
                    <input naInput placeholder="you@co.com" />
                  </na-field>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    <na-field label="Password" error="Minimum 8 characters" required>
                      <input naInput invalid type="password" placeholder="••••••••" />
                    </na-field>
                    <na-field label="Notes" hint="Anything we should know?">
                      <textarea naInput rows="3"></textarea>
                    </na-field>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[2].title" [description]="d.demos[2].description" [code]="d.demos[2].code">
                  <na-field label="Plan" hint="Billed monthly">
                    <select naInput>
                      <option>Free</option>
                      <option>Pro</option>
                    </select>
                  </na-field>
                </docs-demo-card>
              }
              @case ('form') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-form submitLabel="Login" (submitted)="formMsg.set('Submitted! (demo)')">
                    <na-field label="Email" required>
                      <input naInput placeholder="you@co.com" />
                    </na-field>
                    <na-field label="Password" required>
                      <input naInput type="password" />
                    </na-field>
                  </na-form>
                  @if (formMsg()) { <na-text tone="accent" size="sm">{{ formMsg() }}</na-text> }
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-form submitLabel="Save" showCancel (submitted)="formMsg.set('Saved!')" (cancelled)="formMsg.set('Cancelled.')">
                    <na-field label="Name">
                      <input naInput placeholder="Project name" />
                    </na-field>
                  </na-form>
                  @if (formMsg()) { <na-text tone="accent" size="sm">{{ formMsg() }}</na-text> }
                </docs-demo-card>
              }
              @case ('switch') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-switch label="Email alerts" [(checked)]="switchOn" />
                    <na-text tone="muted" size="sm">Alerts are {{ switchOn() ? 'on' : 'off' }}.</na-text>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-switch label="Locked by admin" disabled />
                </docs-demo-card>
              }
              @case ('checkbox') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-checkbox label="Remember me" [(checked)]="remember" />
                    <na-checkbox label="Subscribe to changelog" [(checked)]="news" />
                    <na-text tone="muted" size="sm">remember={{ remember() }}, news={{ news() }}</na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('radio-group') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-radio-group
                      label="Plan"
                      [options]="[
                        { value: 'free', label: 'Free' },
                        { value: 'pro', label: 'Pro' },
                        { value: 'scale', label: 'Scale', disabled: true }
                      ]"
                      [(value)]="plan"
                    />
                    <na-text tone="muted" size="sm">Selected: {{ plan() }}</na-text>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="lg">
                    <na-radio-group
                      label="Billing cycle"
                      orientation="inline"
                      [options]="[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]"
                      [(value)]="cycle"
                    />
                    <na-radio-group
                      label="View"
                      variant="segmented"
                      [options]="[
                        { value: 'list', label: 'List' },
                        { value: 'grid', label: 'Grid' },
                        { value: 'board', label: 'Board', disabled: true }
                      ]"
                      [(value)]="view"
                    />
                    <na-text tone="muted" size="sm">
                      Billing: {{ cycle() }} · view: {{ view() }}
                    </na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('upload') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-upload
                      action="https://httpbin.org/post"
                      name="file"
                      accept="image/*,video/*"
                      drag
                      (change)="onUploadChange($event)"
                      (progress)="onUploadProgress($event)"
                    />
                    <na-text tone="muted" size="sm">{{ uploadStatus() }}</na-text>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    <na-upload
                      action="https://httpbin.org/post"
                      name="avatar"
                      accept="image/*"
                      [limit]="1"
                      (change)="onUploadChange($event)"
                    />
                    <na-text tone="muted" size="sm">Accepts one image. Remove the current file before choosing another.</na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('app') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-alert tone="success" title="You are inside one">This docs site renders within a single na-app at the root.</na-alert>
                </docs-demo-card>
              }
              @case ('page') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-text tone="muted">This page uses a medium page column. Try resizing — gutters stay consistent.</na-text>
                </docs-demo-card>
              }
              @case ('stack') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="lg">
                    <na-heading level="2">Sign in</na-heading>
                    <na-field label="Email">
                      <input naInput placeholder="you@co.com" />
                    </na-field>
                    <na-button variant="primary">Login</na-button>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('row') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-row gap="md" align="center" justify="between">
                    <na-heading level="3">Members</na-heading>
                    <na-button variant="primary">Invite</na-button>
                  </na-row>
                </docs-demo-card>
              }
              @case ('grid') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-grid cols="3" gap="md">
                    <na-card title="Free">Hobby projects</na-card>
                    <na-card title="Pro">Teams</na-card>
                    <na-card title="Scale">Platforms</na-card>
                  </na-grid>
                </docs-demo-card>
              }
              @case ('split') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-split columns="280px 1fr">
                    <na-text tone="muted">Sidebar</na-text>
                    <na-text>Content</na-text>
                  </na-split>
                </docs-demo-card>
              }
              @case ('divider') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-text>Above</na-text>
                    <na-divider />
                    <na-text>Below</na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('spacer') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-row gap="md">
                    <na-text>Left</na-text>
                    <na-spacer />
                    <na-text>Right</na-text>
                  </na-row>
                </docs-demo-card>
              }
              @case ('heading') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-heading level="1">Page title</na-heading>
                    <na-heading level="2">Section</na-heading>
                    <na-heading level="3">Subsection</na-heading>
                    <na-heading level="4">Detail</na-heading>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('text') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-text>Default body copy.</na-text>
                    <na-text tone="muted">Secondary information.</na-text>
                    <na-text tone="faint" size="sm">Caption / metadata.</na-text>
                    <na-text tone="accent">Lime highlight.</na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('link') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-text>Read the <na-link href="/docs/theme">theme guide</na-link> first.</na-text>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    <na-link
                      href="https://example.com/share/abc123"
                      copyable
                      (copied)="copiedLink.set($event)"
                    >
                      https://example.com/share/abc123
                    </na-link>
                    <na-text tone="muted" size="sm">
                      {{ copiedLink() ? 'Copied: ' + copiedLink() : 'Use the copy button to share this direct link.' }}
                    </na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('icon') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-grid cols="4" gap="md">
                    @for (icon of iconNames; track icon) {
                      <na-row gap="sm" align="center">
                        <na-icon [name]="icon" />
                        <na-text size="sm" tone="muted">{{ icon }}</na-text>
                      </na-row>
                    }
                  </na-grid>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-row gap="lg" align="center">
                    <na-icon name="inbox" size="16" />
                    <na-icon name="inbox" size="24" />
                    <na-icon name="inbox" size="32" />
                    <na-icon name="check" tone="success" />
                    <na-icon name="alert" tone="warning" />
                    <na-icon name="x" tone="danger" />
                    <na-icon name="info" tone="info" />
                    <na-icon name="spinner" tone="accent" />
                  </na-row>
                </docs-demo-card>
              }
              @case ('code') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-text>Set the variant input to "primary" for the main action.</na-text>
                </docs-demo-card>
              }
              @case ('empty-state') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-empty-state title="No members yet" description="Invite your team to get started.">
                    <na-button variant="primary">Invite</na-button>
                  </na-empty-state>
                </docs-demo-card>
              }
              @case ('card') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-card title="Pro plan" subtitle="For teams">
                    <na-text>$20 / seat / month.</na-text>
                  </na-card>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-card title="Billing">
                    <na-stack gap="md">
                      <na-text tone="muted">Next invoice May 1.</na-text>
                      <na-button variant="primary">Pay now</na-button>
                    </na-stack>
                  </na-card>
                </docs-demo-card>
              }
              @case ('badge') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-row gap="md">
                    <na-badge tone="lime">v1.4.0</na-badge>
                    <na-badge tone="neutral">draft</na-badge>
                    <na-badge tone="success">live</na-badge>
                    <na-badge tone="warning">beta</na-badge>
                    <na-badge tone="danger">down</na-badge>
                    <na-badge tone="info">new</na-badge>
                  </na-row>
                </docs-demo-card>
              }
              @case ('alert') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-alert tone="info" title="Heads up">New version available.</na-alert>
                    <na-alert tone="success" title="Saved">Changes are live.</na-alert>
                    <na-alert tone="warning" title="Careful">This affects billing.</na-alert>
                    <na-alert tone="danger" title="Failed">Could not save.</na-alert>
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    @if (alertOpen()) {
                      <na-alert
                        tone="success"
                        showIcon
                        title="Upload complete"
                        description="2 files are ready to share."
                        closable
                        (closed)="alertOpen.set(false)"
                      >
                        <na-link href="/components/link" copyable>Open the files</na-link>
                      </na-alert>
                    } @else {
                      <na-row gap="md" align="center">
                        <na-text tone="muted" size="sm">Alert dismissed.</na-text>
                        <na-button variant="secondary" size="sm" (pressed)="alertOpen.set(true)">Show it again</na-button>
                      </na-row>
                    }
                  </na-stack>
                </docs-demo-card>
              }
              @case ('table') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-table
                      [columns]="[{ key: 'name', header: 'Name' }, { key: 'plan', header: 'Plan' }]"
                      [rows]="tableRows()"
                      emptyMessage="No members yet"
                    />
                    <na-row gap="md">
                      <na-button variant="secondary" size="sm" (pressed)="toggleTableRows()">Toggle empty state</na-button>
                    </na-row>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('list') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-list>
                    <na-row gap="md" align="center" justify="between">
                      <na-text>Notifications</na-text>
                      <na-switch [(checked)]="switchOn" />
                    </na-row>
                    <na-row gap="md" align="center" justify="between">
                      <na-text>Marketing email</na-text>
                      <na-switch [(checked)]="news" />
                    </na-row>
                  </na-list>
                </docs-demo-card>
              }
              @case ('breadcrumbs') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-breadcrumbs [items]="['Docs', 'Components', 'Button']" />
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-breadcrumbs
                    [items]="[
                      { label: 'Docs', href: '/docs/install' },
                      { label: 'Components', href: '/components/button' },
                      'Button',
                    ]"
                  />
                </docs-demo-card>
              }
              @case ('avatar') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-row gap="md" align="center">
                    <na-avatar name="Ada Lovelace" size="sm" />
                    <na-avatar name="Ada Lovelace" size="md" />
                    <na-avatar name="Grace Hopper" size="lg" />
                  </na-row>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-avatar
                    name="Ada Lovelace"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect width='72' height='72' fill='%23cdea7f'/%3E%3Ctext x='36' y='46' font-family='sans-serif' font-size='28' font-weight='bold' text-anchor='middle' fill='%231a1a1a'%3EAL%3C/text%3E%3C/svg%3E"
                  />
                </docs-demo-card>
              }
              @case ('spinner') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-spinner label="Loading members…" />
                </docs-demo-card>
              }
              @case ('progress') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-progress [value]="progress()" />
                    <na-row gap="md" align="center">
                      <na-button variant="secondary" size="sm" (pressed)="progress.set(Math.max(0, progress() - 10))">−10</na-button>
                      <na-button variant="secondary" size="sm" (pressed)="progress.set(Math.min(100, progress() + 10))">+10</na-button>
                      <na-text tone="muted" size="sm">{{ progress() }}%</na-text>
                    </na-row>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('modal') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-button variant="danger" (pressed)="modalOpen.set(true)">Delete</na-button>
                  <na-modal title="Delete project?" [open]="modalOpen()" (closed)="modalOpen.set(false)">
                    <na-stack gap="md">
                      <na-text>This cannot be undone.</na-text>
                      <na-row gap="md">
                        <na-button variant="danger" (pressed)="modalOpen.set(false)">Delete</na-button>
                        <na-button variant="secondary" (pressed)="modalOpen.set(false)">Cancel</na-button>
                      </na-row>
                    </na-stack>
                  </na-modal>
                </docs-demo-card>
              }
              @case ('tabs') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-stack gap="md">
                    <na-tabs [tabs]="['HTML', 'API']" [(active)]="tabIndex" />
                    @if (tabIndex() === 0) {
                      <na-code>markup goes here</na-code>
                    } @else {
                      <na-text tone="muted">props go here</na-text>
                    }
                  </na-stack>
                </docs-demo-card>
                <docs-demo-card [title]="d.demos[1].title" [description]="d.demos[1].description" [code]="d.demos[1].code">
                  <na-stack gap="md">
                    <na-tabs [(active)]="tabIndex" [(activeId)]="tabId">
                      <na-tab id="general" title="General">
                        <na-stack gap="md">
                          <na-field label="Workspace name">
                            <input naInput [value]="'Acme'" />
                          </na-field>
                          <na-checkbox label="Remember this panel" [(checked)]="tabRemember" />
                          <na-text tone="muted" size="sm">Switch tabs and come back — the input and checkbox stay mounted.</na-text>
                        </na-stack>
                      </na-tab>
                      <na-tab id="billing" title="Billing">
                        <na-text tone="muted">Billing panel. Both panels stay in the DOM; only the inactive one is hidden.</na-text>
                      </na-tab>
                      <na-tab id="danger" title="Danger">
                        <na-alert tone="danger" title="Danger zone" description="Deleting the workspace cannot be undone." />
                      </na-tab>
                    </na-tabs>
                    <na-text tone="muted" size="sm">active={{ tabIndex() }} · activeId={{ tabId() }}</na-text>
                  </na-stack>
                </docs-demo-card>
              }
              @case ('tooltip') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-button variant="secondary" naTooltip="Saved to drafts">Hover me</na-button>
                </docs-demo-card>
              }
              @case ('header') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-header title="Billing" subtitle="Invoices and seats">
                    <na-button variant="primary">Pay now</na-button>
                  </na-header>
                </docs-demo-card>
              }
              @case ('footer') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-footer>
                    <na-text tone="muted" size="sm">MIT · newAng docs</na-text>
                  </na-footer>
                </docs-demo-card>
              }
              @case ('toolbar') {
                <docs-demo-card [title]="d.demos[0].title" [description]="d.demos[0].description" [code]="d.demos[0].code">
                  <na-toolbar>
                    <input naInput placeholder="Search members…" />
                    <na-spacer />
                    <na-button variant="primary">Invite</na-button>
                  </na-toolbar>
                </docs-demo-card>
              }
              @default {
                @for (demo of d.demos; track demo.title) {
                  <docs-code-block [code]="demo.code" />
                }
              }
            }
          </na-stack>

          <na-stack gap="md">
            <na-heading level="2">API</na-heading>
            <docs-api-table [rows]="d.api" />
          </na-stack>

          @if (d.donts.length) {
            <na-stack gap="md">
              <na-heading level="2">Do / Don't</na-heading>
              <na-grid cols="2" gap="md">
                <na-alert tone="success" title="Do">{{ d.zeroCssRule }}</na-alert>
                @for (dont of d.donts; track dont) {
                  <na-alert tone="warning" title="Don't">{{ dont }}</na-alert>
                }
              </na-grid>
            </na-stack>
          }
        </na-stack>
      </na-page>
    } @else {
      <na-page maxWidth="md">
        <na-empty-state title="Not found" description="This component page does not exist yet.">
          <a routerLink="/" style="text-decoration:none"><na-button variant="primary">Back home</na-button></a>
        </na-empty-state>
      </na-page>
    }
  `,
})
export class ComponentDocPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly Math = Math;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly doc = computed(() => COMPONENT_DOCS[this.slug()]);

  // ── Interactive demo state (signals; zoneless-safe) ──
  protected readonly pressCount = signal(0);
  protected readonly formMsg = signal('');
  protected readonly switchOn = signal(true);
  protected readonly remember = signal(true);
  protected readonly news = signal(false);
  protected readonly plan = signal<string | number | undefined>('pro');
  protected readonly modalOpen = signal(false);
  protected readonly tabIndex = signal(0);
  protected readonly tabId = signal<string>('general');
  protected readonly tabRemember = signal(true);
  protected readonly progress = signal(35);
  protected readonly tableFull = signal(true);
  protected readonly copiedLink = signal('');
  protected readonly alertOpen = signal(true);
  protected readonly cycle = signal<string | number | undefined>('monthly');
  protected readonly view = signal<string | number | undefined>('list');
  protected readonly uploadStatus = signal('No file selected yet.');

  protected readonly iconNames: NaIconName[] = [
    'inbox',
    'check',
    'copy',
    'x',
    'upload',
    'download',
    'alert',
    'info',
    'chevron-up',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'spinner',
    'file',
    'trash',
    'search',
    'external-link',
    'eye',
    'refresh',
    'plus',
  ];

  protected readonly tableRows = computed(() =>
    this.tableFull()
      ? [
          { name: 'Ada', plan: 'Pro' },
          { name: 'Grace', plan: 'Free' },
        ]
      : [],
  );

  protected toggleTableRows(): void {
    this.tableFull.update((v) => !v);
  }

  protected onUploadChange(event: NaUploadChangeEvent): void {
    const error = event.status === 'error' && event.error ? ` — ${event.error}` : '';
    this.uploadStatus.set(`${event.file.name}: ${event.status}${error} (${event.percent}%)`);
  }

  protected onUploadProgress(event: NaUploadChangeEvent): void {
    this.uploadStatus.set(`${event.file.name}: uploading ${event.percent}%`);
  }
}
