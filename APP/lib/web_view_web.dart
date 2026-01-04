import 'package:flutter/material.dart';
import 'package:web/web.dart' as web;
import 'dart:ui_web' as ui_web;

Widget buildWebView(String url, String viewType) {
  // Register the iframe view factory
  ui_web.platformViewRegistry.registerViewFactory(
    viewType,
    (int viewId) {
      final iframe = web.HTMLIFrameElement()
        ..src = url
        ..style.border = 'none'
        ..style.height = '100%'
        ..style.width = '100%';
      return iframe;
    },
  );

  return HtmlElementView(viewType: viewType);
}
