import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'web_view_stub.dart' if (dart.library.html) 'web_view_web.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Jeevan Aahar',
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: const HomePageWidget(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class HomePageWidget extends StatefulWidget {
  const HomePageWidget({super.key});

  @override
  State<HomePageWidget> createState() => _HomePageWidgetState();
}

class _HomePageWidgetState extends State<HomePageWidget> {
  late final WebViewController? _webViewController;
  final String _url = 'https://jeevan-aahar.vercel.app';
  final String _viewType = 'jeevan-aahar-iframe';

  @override
  void initState() {
    super.initState();

    if (!kIsWeb) {
      // For mobile platforms, use WebView
      _webViewController = WebViewController()
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..clearCache()
        ..loadRequest(Uri.parse(_url));
    } else {
      _webViewController = null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        backgroundColor: Colors.grey[50],
        appBar: AppBar(
          backgroundColor: const Color(0xFF0CCF9C),
          automaticallyImplyLeading: false,
          title: const Center(
            child: Text(
              'Jeevan Aahar',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 22,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
          elevation: 2,
        ),
        body: SafeArea(
          child: kIsWeb
              ? buildWebView(_url, _viewType)
              : WebViewWidget(
                  controller: _webViewController!,
                ),
        ),
      ),
    );
  }
}
