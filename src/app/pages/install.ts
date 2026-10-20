import { Component, signal } from '@angular/core';
import {
  NaAlert,
  NaCode,
  NaHeading,
  NaPage,
  NaStack,
  NaTabs,
  NaText,
} from 'newang';
import { CodeBlock } from '../shared/code-block';

@Component({
  selector: 'docs-install',
  imports: [NaAlert, NaCode, NaHeading, NaPage, NaStack, NaTabs, NaText, CodeBlock],
  template: `
    <na-page maxWidth="md">
      <na-stack gap="lg">
        <na-stack gap="md">
          <na-heading level="1">Install</na-heading>
          <na-text tone="muted">
            One command wires the theme into your app. Requires Angular 19+.
            Both Sass and plain-CSS apps are supported.
          </na-text>
        </na-stack>
        <docs-code-block code="ng add newang" />
        <na-alert tone="info" title="What ng add does">
          Adds the dependency and detects your stylesheet. Sass apps get the
          <na-code>&#64;use 'newang/styles'</na-code> mixin injected into
          <na-code>src/styles.scss</na-code>. Plain-CSS apps get
          <na-code>node_modules/newang/styles.css</na-code> added to the
          <na-code>styles</na-code> array in <na-code>angular.json</na-code> —
          no Sass toolchain required. If the schematic cannot detect your setup,
          use the manual step below.
        </na-alert>

        <na-stack gap="md">
          <na-heading level="2">Manual install</na-heading>
          <docs-code-block [code]="manualNpm" />
          <na-text tone="muted">Pick the path that matches your app:</na-text>
          <na-tabs [tabs]="['Sass (SCSS)', 'Plain CSS']" [(active)]="styleTab" />

          @if (styleTab() === 0) {
            <na-stack gap="md">
              <na-text tone="muted">
                Add this to the top of <na-code>src/styles.scss</na-code>:
              </na-text>
              <docs-code-block [code]="manualScss" />
              <na-text tone="muted" size="sm">
                Use the SCSS entry when you want to override the
                <na-code>$na-*</na-code> tokens at build time.
              </na-text>
            </na-stack>
          } @else {
            <na-stack gap="md">
              <na-text tone="muted">
                Add the compiled stylesheet before your own styles in
                <na-code>angular.json</na-code>:
              </na-text>
              <docs-code-block [code]="manualCss" />
              <na-text tone="muted" size="sm">
                No Sass dependency and no mixin. The compiled file carries the
                tokens, base styles and global directive styles; component
                styles ship with the Angular components themselves.
              </na-text>
            </na-stack>
          }
        </na-stack>

        <na-stack gap="md">
          <na-heading level="2">Verify</na-heading>
          <na-text tone="muted">Drop this anywhere inside your root component template:</na-text>
          <docs-code-block [code]="verify" />
        </na-stack>

        <na-alert tone="warning" title="Sass or plain CSS?">
          Both entries load the same theme. Choose SCSS only if you need
          compile-time token overrides. Runtime overrides work in both setups
          through the <na-code>--na-*</na-code> CSS custom properties.
        </na-alert>
      </na-stack>
    </na-page>
  `,
})
export class InstallPage {
  protected readonly styleTab = signal(0);
  protected readonly manualNpm = `npm i newang`;
  protected readonly manualScss = `@use 'newang/styles' as na;\n@include na.base();`;
  protected readonly manualCss = `"styles": [\n  "node_modules/newang/styles.css",\n  "src/styles.css"\n]`;
  protected readonly verify = `<na-app>\n  <na-page maxWidth="md">\n    <na-button variant="primary">It works</na-button>\n  </na-page>\n</na-app>`;
}
