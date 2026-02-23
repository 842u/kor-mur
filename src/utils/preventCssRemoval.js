import Router from 'next/router';

/**
 * Keeps previous page styles alive for a short time during route transitions.
 *
 * Why this exists:
 * In the Next.js Pages Router, CSS Modules tied to a page are removed
 * immediately when the route changes, even if exit animations are still running.
 *
 * This function:
 * 1. Clones all active <style> and <link rel="stylesheet"> nodes
 * 2. Removes Next.js internal tracking attributes
 * 3. Appends the clones to <head>
 * 4. Removes the clones after the specified timeout
 *
 * @param timeout Duration (ms) to keep old styles after routeChangeComplete
 */
export function preventCssRemoval(timeout) {
  if (typeof window === 'undefined') return;

  const handleBeforeHistoryChange = () => {
    // Select all active stylesheet nodes
    const styleNodes = document.querySelectorAll('link[rel="stylesheet"], style:not([media="x"])');

    // Clone them so they survive Next.js cleanup
    const clonedNodes = Array.from(styleNodes).map((node) => node.cloneNode(true));

    clonedNodes.forEach((clone) => {
      /**
       * Next.js adds internal attributes (data-n-p, data-n-href)
       * to track and remove styles on route change.
       *
       * We remove those so Next.js won't delete our clones.
       */
      clone.removeAttribute('data-n-p');
      clone.removeAttribute('data-n-href');

      // Append the cloned stylesheet to <head>
      document.head.appendChild(clone);
    });

    // Create a one-time handler for route completion
    const handleRouteComplete = () => {
      Router.events.off('routeChangeComplete', handleRouteComplete);

      // Wait for animation duration before cleanup
      window.setTimeout(() => {
        clonedNodes.forEach((clone) => {
          if (document.head.contains(clone)) {
            document.head.removeChild(clone);
          }
        });
      }, timeout);
    };

    Router.events.on('routeChangeComplete', handleRouteComplete);
  };

  Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
}
